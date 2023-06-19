import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";
import * as SamplePage from "./pages/sample";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage.Root />} />

        {/* <Route element={<CenterLayout />}>
          <Route path="sign-in" element={<Pages.Main.SignIn />} />
          <Route path="sign-up" element={<Pages.Main.SignUp />} />
        </Route> */}

        {/* Sample Pages Routing */}
        <Route path="sample">
          <Route index element={<SamplePage.Linker />} />
          <Route path="daisy-sample" element={<SamplePage.DaisySample />} />
        </Route>

        <Route path="*" element={<MainPage.NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
