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

        <Route path="daisy-sample" element={<MainPage.DaisySample />} />
        <Route path="useEffect-sample" element={<MainPage.UseEffectSample />} />
        <Route path="todoList-sample" element={<MainPage.TodoListSample />} />
        <Route path="coin-sample" element={<MainPage.CoinSample />} />
        <Route path="movie-sample" element={<MainPage.MovieSample />} />
        <Route
          path="movie-sample/Detail/:id"
          element={<MainPage.MovieDetailSample />}
        />

        <Route path="*" element={<MainPage.NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
