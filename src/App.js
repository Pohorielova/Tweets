import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/tweets" element={<Tweets />} />
      </Routes>
    </>
  );
};
