// T 가 오브젝트인지 확인하는 유틸
type IsObject<T> = T extends object ? true : false;

// T 가 배열인지 확인하는 유틸
// 주의할점은 배열을 IsObject 한 결과는 true라는 것
type IsArray<T> = T extends any[] ? true : false;

// `${T}`안에 T는 이 중 하나여야만 리터럴 타입 유도가 가능함.
type LitteralSupportTypes =
  | undefined
  | boolean
  | string
  | null
  | number
  | bigint;

// 타입 추론의 시작점.
export type TypeFlatten<T> = {
  // 키 : innerTypeFlatten[DEPTH]를 통해 DEPTH 깊이 만큼을 재귀적으로 키 분석시도함.
  // 값 : 분석된 키를 통해 T로부터 해당 키가 어떤 타입인지 추론함
  [K in innerTypeFlatten5<T, keyof T>]: innerTypeFlattenValue<T, K>;
};

// innerTypeFlatten[DEPTH] 형태의 타입들은 타입스크립트 컴파일러가 재귀적으로 분석하는 것을 허용하지 않기에
// 직접 깊이를 프로그래머가 구성해야 함
type innerTypeFlatten5<T, K extends keyof T> = K extends LitteralSupportTypes
  ? IsObject<T[K]> extends true
    ? IsArray<T[K]> extends true
      ? // 만약 T[K]가 오브젝트이고 배열이라면 키를 재귀적으로 분석하지 않음
        `${K}`
      : // 만약 T[K]가 오브젝트이고 배열이 아니라면 키를 재귀적으로 다시 분석함
        `${K}` | `${K}.${innerTypeFlatten4<T[K], keyof T[K]>}`
    : // T[K]가 오브젝트가 아니라면 재귀분석을 중지함.
      `${K}`
  : // K가 symbol 같은 literal 타입으로 전환이 불가능하다면 재귀적 분석을 중지함.
    never;
type innerTypeFlatten4<T, K extends keyof T> = K extends LitteralSupportTypes
  ? IsObject<T[K]> extends true
    ? IsArray<T[K]> extends true
      ? `${K}`
      : `${K}` | `${K}.${innerTypeFlatten3<T[K], keyof T[K]>}`
    : `${K}`
  : never;
type innerTypeFlatten3<T, K extends keyof T> = K extends LitteralSupportTypes
  ? IsObject<T[K]> extends true
    ? IsArray<T[K]> extends true
      ? `${K}`
      : `${K}` | `${K}.${innerTypeFlatten2<T[K], keyof T[K]>}`
    : `${K}`
  : never;
type innerTypeFlatten2<T, K extends keyof T> = K extends LitteralSupportTypes
  ? IsObject<T[K]> extends true
    ? IsArray<T[K]> extends true
      ? `${K}`
      : `${K}` | `${K}.${innerTypeFlatten1<T[K], keyof T[K]>}`
    : `${K}`
  : never;
// 마지막 재귀적 키 분석에서 추론하는 경우 나머지들과는 약간의 차이가 있음
type innerTypeFlatten1<T, K extends keyof T> = K extends LitteralSupportTypes
  ? IsObject<T[K]> extends true
    ? IsArray<T[K]> extends true
      ? `${K}`
      : // 원래 여기 재귀적으로 분석할 수 있도록 DEPTH-1인 형태의 재귀적 타입 제네릭 호출이 필요하지만.
        // 무한재귀에 빠지지 않도록 강제적으로 재귀적 분석을 중지함.
        `${K}`
    : `${K}`
  : never;
// flatten된 키와 T를 이용해 T에서 K가 표현하는 타입이 무엇인지 분석하는 유틸
// 여기서 키란 "a.b.c"같은 flatten된 오브젝트 키를 의미한다.
// 여기서 최종 노드란 "a.b.c"같은 키에서 "c"를 의미한다.
type innerTypeFlattenValue<T, K extends string> =
  //우선 K가 최종 노드인지 확인한다
  K extends `${infer PRE}.${infer POST}`
    ? // 만약 최종 노드가 아니라면
      PRE extends keyof T
      ? // 최종 노드가 아니고, 만약 PRE가 현재 T의 키인 경우 재귀적으로 타입을 다시 추론
        innerTypeFlattenValue<T[PRE], POST>
      : // PRE에 일치하는 타입이 존재하지 않는 경우
        never
    : // K가 최종 노드인 경우
    K extends keyof T
    ? // K가 최종 노드이고 T에 K가 존재하는 경우
      T[K] extends never[]
      ? any[]
      : T[K]
    : // K가 최종 노드인데 K가 T에 존재하지 않는 경우
      never;

export function flatten<T extends object>(target: T): TypeFlatten<T> {
  // TODO : 여기를 직접 만드시오
  return {} as TypeFlatten<T>;
}