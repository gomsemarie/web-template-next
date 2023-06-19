/*------------------------------------------------------------------------------------------------------------------------------------------
 * Linker.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { useNavigate } from "react-router-dom";

interface LinkerProps {}

function Linker(props: LinkerProps) {
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
    <div data-page="linker">
      <h1 className="title">Sample Pages Linker</h1>
      <p className="link" onClick={() => navigator("/sample/daisy-sample")}>
        Go daisy UI sample page
      </p>
    </div>
  );
}

namespace Linker {}

export default Linker;
