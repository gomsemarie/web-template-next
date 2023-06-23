/* ------------------------------------------------------------------------------------------------------------------------------------------
 * useRecoilForm.ts
 * WRITER : 김재원
 * DATE : 2023-06-15
 * DISCRIPTION : Recoil의 상태를 관리하는 커스텀 훅
 * TYPE : Hook
 * HISTORY :
--------------------------------------------------------------------------------------------------------------------------------------------*/
'use client';

import React from 'react';

import { recoilFormDefaultAtomFamily } from '@/hook/useRecoilForm/atom';
import { RecoilState, SetterOrUpdater, useRecoilState } from 'recoil';

//============================================================================================================================================
// [Recoil] recoilState를 사용하기 위한 Hook
//============================================================================================================================================
export default function useRecoilForm<T extends object>(
  id: string | number,
  initial: T
): [T, SetterOrUpdater<T>] {
  const [recoilState, setRecoilState] = useRecoilState<T>(
    recoilFormDefaultAtomFamily(id)
  );

  React.useEffect(() => {
    if ('key' in initial) {
      throw new Error(
        `RecoilData 초기 값으로 "key"명칭의 key를 사용할 수 없습니다.`
      );
    }

    setRecoilState((prevObj: any) => {
      return {
        ...initial,
        ...prevObj,
      };
    });
  }, [initial]);

  //----------------------------------------------------------------------------------------------------------------------------------------
  // recoilState를 반환한다.
  //----------------------------------------------------------------------------------------------------------------------------------------
  return [recoilState, setRecoilState];
}
