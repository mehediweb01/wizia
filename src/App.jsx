import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarArea from "./components/shared/Navbar";
import HomePage from "./components/Home/HomePage";
import PageNotFount from "./components/PageNotFount";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <BrowserRouter>
          <NavbarArea />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFount />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </>
  );
}

export default App;
