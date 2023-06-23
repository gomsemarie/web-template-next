import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";

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

        <Route path="*" element={<MainPage.NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
