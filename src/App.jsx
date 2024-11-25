import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./components/Buttons";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/Home/HomePage";
import PageNotFount from "./components/PageNotFount";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
