/*------------------------------------------------------------------------------------------------------------------------------------------
 * UseEffectSample.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { useState, useEffect } from "react";
import Button from "./component/Button";
import DaisySample from "../DaisySample/DaisySample";

interface UseEffectSampleProps {}

function UseEffectSample(props: UseEffectSampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;

  /* State ――――― */
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [list, setList] = useState([]);

  /* Const ――――― */

  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */
  const onClick = () => setCount((count) => count + 1);
  const onChange = (event) => setKeyword(event.target.value);

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  // 항상 실행
  console.log("i run all the time");
  //setList((currentArray) => ["i run all the time", ...currentArray]);

  // 한번만 실행
  useEffect(() => {
    //console.log("i run only once");
    setList((currentArray) => ["i run only once", ...currentArray]);
  }, []);

  // keyword가 변경될때만 실행
  useEffect(() => {
    if (keyword != "") {
      //console.log("search", keyword);
      setList((currentArray) => [`search${keyword}`, ...currentArray]);
    }
  }, [keyword]);

  // count가 변경될때만 실행
  useEffect(() => {
    //console.log("count", count);
    setList((currentArray) => [`count${count}`, ...currentArray]);
  }, [count]);

  // keyword or count가 변경될때만 실행
  useEffect(() => {
    //console.log("search or count");
    setList((currentArray) => [`search or count`, ...currentArray]);
  }, [keyword, count]);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="daisySample">
      <DaisySample.goBack></DaisySample.goBack>
      <DaisySample.SampleBox title="useEffect event check">
        <div className="card w-96 bg-base-100 shadow-xl">
          <button onClick={onClick}>click me!! count is {count}</button>
          <p></p>
          <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here..."
          ></input>
          <p></p>
          <Button text={"search"} />
          <p></p>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </DaisySample.SampleBox>
    </div>
  );
}

namespace UseEffectSample {}

export default UseEffectSample;
