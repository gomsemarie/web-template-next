/*------------------------------------------------------------------------------------------------------------------------------------------
 * DefaultLayout.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Layout
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import './DefaultLayout.scss';

interface DefaultLayoutProps {};

function DefaultLayout (props: DefaultLayoutProps) { 
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;
  /* State ――――― */
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-layout='defaultLayout'>
      <div className='left-menu-area'></div>
      <div className='top-menu-area'></div>
      <div className='content-area'>ㄴㅇㄴㅇ</div>
    </div>
  );
};

namespace DefaultLayout {};

export default DefaultLayout;