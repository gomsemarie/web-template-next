/* ------------------------------------------------------------------------------------------------------------------------------------------
 * Util
 * WRITER : 김재원
 * DATE : 2023-06-20
 * DISCRIPTION : Util 함수들을 모아놓은 파일
 * TYPE : Script
 * HISTORY :
--------------------------------------------------------------------------------------------------------------------------------------------*/
export const Util = (() => {
  const is = {
    empty: {
      object: (obj: object): boolean => {
        return Object.keys(obj).length === 0;
      },
    },
  };
  const has = {
    objectFlattenKey: (obj: object, key: string): boolean => {
      const splitKey = key.split('.');
      let findObj: any = { ...obj };
      for (let fKey of splitKey) {
        findObj = Object.getOwnPropertyDescriptor(findObj, fKey);
        if (findObj) {
          findObj = findObj.value;
        } else {
          return false;
        }
      }

      return true;
    },
    objectKey: (obj: { [key: string]: any }, key: string): boolean => {
      if (obj.hasOwnProperty(key)) {
        return true;
      }

      for (let k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
          if (has.objectKey(obj[k], key)) {
            return true;
          }
        }
      }

      return false;
    },
  };

  return { is, has };
})();
