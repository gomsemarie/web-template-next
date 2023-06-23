'use client';

import React from 'react';

import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import Input from '@/components/Input';
// import TestComponent from '@/app/components/TestComponent';
import useRecoilForm from '@/hook/useRecoilForm';
import useRecoilData from '@/hook/useRecoilData';
import {RecoilData, RecoilType} from './recoil';
import { recoilFormDefaultAtomFamily } from '@/hook/useRecoilForm/atom';
import { Util } from '@/util';
import { RecoilData222, RecoilType222 } from '@/app/testpage/recoil';
import { InputComponent } from '@/components/Input/Input';

import './testpage.scss';

// interface ITest {
//   a?: string;
//   b?: number;
// }

// interface ITest2 {
//   c?: string;
//   d?: number;
// }

// interface Total<T extends string | undefined> {
//   type?: T;
// }

// function aaaab<T extends string | undefined>(props: Total<T> & (T extends string ? ITest : ITest2)) {
//   const {
//     a,
//     b,
//     c,
//     d,
//     type,
//   } = props as Total<T> & ITest & ITest2;

//   return <></>;
// }

// aaaab({type: 'aaa', a: '123', b: 123, c: '123'});


export default function Pageaaa() {
  const throwError = () => {
    throw new Error('에러를 발생시킨다.');
  };

  // const selector = recoilManager;
  const [recoilState, setRecoilState] = useRecoilForm('default-form', RecoilData);
  
  useRecoilForm('list-form', RecoilData222);

  React.useEffect(() => {
    // console.log('recoilState: ', recoilState);
  }, [recoilState]);

  // React.useEffect(() => {
  //   console.log('numberInput: ', recoilState.numberInput);
  // }, [recoilState.numberInput]);
  
  // const bbb = recoilStateArr;
  // console.log('recoilManager:', aaa, 'recoilStateArr:', bbb);
  // console.log('recoilManager:', aaa);

  // { key: 'testState', default: '01071811435' },
  // { key: 'aaaa', default: '01071811435' }

  // const form = useForm<aa>([{   
  //   key: 'abc',
  //   value: 123
  // }]);

  const [value, setValue] = React.useState<number>(1);
  const [value2, setValue2] = React.useState<string>('안녕');

  return (
    <main className="p-5">
      <h1 className="text-5xl font-bold">NFTtown Portal</h1>
      <Input id={'default-form'} name='textInput' />
      <Input value='1234' />
      <Input value={value2} onChange={(v) => setValue2(v)} />
      <Input.Phone onChange={(v) => {console.log(v);}} />
      <Input.Number minNumber={30} maxNumber={400} fullSelection={false} value={1234} />

      <DropdownComponent />
      <input type="number" min="1" max="5" />
    </main>
  );
}

const DropdownComponent = ({}) => {
  // const selector = recoilSelector('testState');
  // const aaa = recoilSelector('testState');

  // const [abc, setAbc] = useRecoilData<initType>('abc');
  // const aaa = useRecoilData<initType>('aaaa');
  // const [aaa, setAaa] = useRecoilData<initType>('testState');
  // const [bbb, setBbb] = useRecoilData<initType>('bbbb.cccc');
  // const [ccc, setCcc] = useRecoilData<initType>('bbbb.dddd.eeee');

  const [getData, setData, recoilState, setRecoilState] = useRecoilData<RecoilType>('default-form');
  const [getData2, setData2, recoilState2, setRecoilState2] = useRecoilData<RecoilType222>('list-form');

  const aaaa = getData('aaaa');

  // const [aaa, setAaa] = useRecoilDataKey<initType>(ID, 'testState');

  // React.useEffect(() => {
  //   console.log('!! testValue 변화갑지: ', aaa.get());
  // }, [aaa.get()])

  const list = getData2('list');

  React.useEffect(() => {
    // console.log('aaa: ', aaaa, 'state:', recoilState);

    // console.log('testtest: ', getData('testtest'));
    // setRecoilState({
    //   ...recoilState,
    //   bbbb: {
    //     cccc: 0,
    //     dddd: {
    //       eeee: '0'
    //     }
    //   }
    // })
  },[recoilState.aaaa]);

  // React.useEffect(() => {
  //   console.log('recoilState2.aaaa: ', recoilState2.aaaa, 'recoilState2:', recoilState2);

  // },[recoilState2.aaaa]);

  React.useEffect(() => {
    // console.log('recoilState2.test:', recoilState2.test, 'recoilState2: ', recoilState2);
  },[recoilState2.test]);

  // React.useEffect(() => {
  //   console.log('bbb: ', bbb);
  // },[bbb]);

  // React.useEffect(() => {
  //   setKeyOfAaa('aaaa', '1234');
  // }, []);

  // const [a, setA] = useRecoilState(townFormAtom('townFormAtomFamily'))

  return (
    <div className="dropdown">
      <Input.Phone id={'default-form'} name={'aaaa'} returnFormat='masking' />
      <Input id={'list-form'} name='test' readonly={true} />
      <label tabIndex={0} className="btn m-1" onClick={() => {
        alert('클릭했땅! 초기값으로 싹 바꿔보자!');

        setData(RecoilData);
      }}>Click</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  );
}