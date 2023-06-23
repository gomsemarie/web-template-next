/*------------------------------------------------------------------------------------------------------------------------------------------
 * TodoListSample.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { React, useState } from "react";
import DaisySample from "../DaisySample/DaisySample";

interface TodoListSampleProps {}

function TodoListSample(props: TodoListSampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;

  /* State ――――― */
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  console.log(toDo);
  console.log(toDos);

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="daisySample">
      <DaisySample.goBack></DaisySample.goBack>
      <DaisySample.SampleBox title="My To Do">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form onSubmit={onSubmit}>
            <h2 className="card-title">List Count ({toDos.length})</h2>
            <input
              value={toDo}
              onChange={onChange}
              placeholder="input To Do"
              type="text"
            ></input>
            <button>input</button>
          </form>
          <hr />
          <div className="card-body">
            <ul>
              {toDos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </DaisySample.SampleBox>
    </div>
  );
}

namespace TodoListSample {}

export default TodoListSample;
