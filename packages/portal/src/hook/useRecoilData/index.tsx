/* ------------------------------------------------------------------------------------------------------------------------------------------
 * useRecoilData Hook
 * WRITER : 김재원
 * DATE : 2023-06-20
 * DISCRIPTION : Recoil의 데이타를 관리하는 커스텀 훅
 * TYPE : Hook
 * HISTORY :
--------------------------------------------------------------------------------------------------------------------------------------------*/
'use client';

import { recoilFormDefaultAtomFamily } from '@/hook/useRecoilForm/atom';
import { useRecoilState } from 'recoil';
import { TypeFlatten } from '@/util/flatten';
import { Util } from '@/util';

//============================================================================================================================================
// [Recoil] useRecoilForm Hook으로 설정한 recoilState를 사용하기 위한 Hook
//============================================================================================================================================
export default function useRecoilData<T extends object = any>(
  id: string | number
) {
  const [recoilState, setRecoilState] = useRecoilState<T>(
    recoilFormDefaultAtomFamily(id)
  );

  const objEmptyKeyCheck = (prefix: string, obj: object, key: string) => {
    if (!Util.is.empty.object(obj) && !Util.has.objectFlattenKey(obj, key)) {
      console.log(`${prefix}: 존재하지 않는 key가 확인되었습니다.\nKEY: ${key} / ID: ${id}`);

      return true;
    }

    return false;
  };

  //----------------------------------------------------------------------------------------------------------------------------------------
  // [getData] 현재 atomFamily에서 key에 해당하는 값을 가져오는 함수, key를 입력하지 않으면 전체 데이터를 가져온다.
  //----------------------------------------------------------------------------------------------------------------------------------------
  function getData(): T;
  function getData<K extends keyof TypeFlatten<T>>(): TypeFlatten<T>[K];
  function getData<K extends keyof TypeFlatten<T>>(key: K): TypeFlatten<T>[K];
  function getData<K extends keyof TypeFlatten<T>>(key?: K) {
    if (typeof key === 'undefined') {
      return recoilState;
    } else {
      if (objEmptyKeyCheck('useRecoilData.getData()', recoilState, key)) {
        return undefined;
      }

      const splitKey = key.split('.');
      let obj: any = { ...recoilState };
      for (let fKey of splitKey) {
        obj = Object.getOwnPropertyDescriptor(obj, fKey);
        if (obj) {
          obj = obj.value;
        } else {
          break;
        }
      }
      return obj;
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // [setData] 현재 atomFamily에서 key에 해당하는 값을 설정하는 함수, key를 입력하지 않으면 전체 데이터를 설정한다.
  //----------------------------------------------------------------------------------------------------------------------------------------
  function setData<K extends keyof TypeFlatten<T>>(
    data:
      | T
      | { key: K; value: TypeFlatten<T>[K] }
      | { key: K; value: TypeFlatten<T>[K] }[]
  ): boolean {
    let tempData = { ...recoilState };
    let flag = false;

    if (Array.isArray(data)) {
      data.forEach((ele) => {
        if (objEmptyKeyCheck('useRecoilData.setData()', recoilState, ele.key)) {
          flag = true;
        }

        const splitKey = ele.key.split('.');
        tempData = setDeep(splitKey, tempData, ele.value) as T;
      });
    } else if (typeof data === 'object' && 'key' in data && 'value' in data) {
      if (objEmptyKeyCheck('useRecoilData.setData()', recoilState, data.key)) {
        flag = true;
      }

      const splitKey = data.key.split('.');
      tempData = setDeep(splitKey, tempData, data.value) as T;
    } else {
      tempData = data;
    }

    if ('key' in tempData) {
      throw new Error(`오브젝트 안에 "key"명칭의 key를 사용할 수 없습니다.`);
    }

    if (flag) {
      return false;
    }

    setRecoilState((prevObj: T) => {
      return {
        ...prevObj,
        ...tempData,
      };
    });

    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // [setDeep] setData에서 사용하는 재귀함수
  //----------------------------------------------------------------------------------------------------------------------------------------
  function setDeep(splitKey: string[], data: object, value: any): object {
    const tempKey = splitKey.shift();

    if (tempKey === undefined) {
      return (data = value);
    }

    const obj = Object.getOwnPropertyDescriptor(data, tempKey);

    if (obj) {
      return (data = {
        ...data,
        [tempKey]: setDeep(splitKey, !!obj ? obj.value : {}, value),
      });
    } else {
      return data;
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // 사용 가능한 함수를 반환한다.
  //----------------------------------------------------------------------------------------------------------------------------------------
  return [getData, setData, recoilState, setRecoilState] as const;
}
