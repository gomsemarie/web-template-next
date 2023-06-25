import { Route, Routes } from "react-router-dom";
import * as MainPage from "./pages/main";

import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage.Root />} />

        <Route element={<DefaultLayout />}>
          <Route path="/sample" element={<MainPage.Root />} />
        </Route>

        <Route path="*" element={<MainPage.NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
