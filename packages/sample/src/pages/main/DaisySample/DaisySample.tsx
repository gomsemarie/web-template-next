/*------------------------------------------------------------------------------------------------------------------------------------------
 * DaisySample.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from "react";
import { useNavigate } from "react-router-dom";

interface DaisySampleProps {}

function DaisySample(props: DaisySampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  const navigator = useNavigate();
  /* State ――――― */
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="daisySample">
      <h1 className="title">Daisy UI Sample page</h1>
      <div className="sample-area">
        <DaisySample.SampleBox title="0. daisy UI document link">
          <a href="https://daisyui.com/components/" target="_blank">
            바로가기
          </a>
        </DaisySample.SampleBox>
        <DaisySample.SampleBox title="1. Alert">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>New software update available.</span>
          </div>
        </DaisySample.SampleBox>
        <DaisySample.SampleBox title="2. Loader">
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </DaisySample.SampleBox>
        <DaisySample.SampleBox title="3. Card">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </DaisySample.SampleBox>
      </div>
    </div>
  );
}

namespace DaisySample {
  interface SampleBoxProps {
    title: string;
    children: React.ReactNode;
  }

  export function SampleBox(props: SampleBoxProps) {
    const { title, children } = props;

    return (
      <div data-component="sample-box">
        <p className="title">{title}</p>
        <div className="sample">{children}</div>
      </div>
    );
  }

  export function goBack() {
    const navigator = useNavigate();
    return (
      <div data-component="sample-box">
        <button onClick={() => navigator(-1)}>이전으로 이동</button>
      </div>
    );
  }
}

export default DaisySample;
