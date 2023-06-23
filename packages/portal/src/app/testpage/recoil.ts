/* ------------------------------------------------------------------------------------------------------------------------------------------
 * recoil.ts
 * WRITER : 김재원
 * DATE : 2023-06-15
 * DISCRIPTION : Page의 상태관리를 위한 recoil 파일
 * TYPE : TS
 * HISTORY :
--------------------------------------------------------------------------------------------------------------------------------------------*/
export const RecoilData = {
  textInput: '안뇽',
  numberInput: 0,
  testState: 111,
  aaaa: '01071811435',
  bbbb: {
    cccc: 1234,
    dddd: {
      eeee: '1234',
    }
  }
}
export const RecoilData222 = {
  test: 'abcddefg',
  list: [{
    name: '김재원',
    level: 1,
  }]
}

export type RecoilType = typeof RecoilData;
export type RecoilType222 = typeof RecoilData222;