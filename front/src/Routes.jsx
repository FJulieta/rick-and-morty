import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" 
      element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/detail/:detailId" element={<Detail/>} />
    </Routes>
  );
};

export default AppRoutes;
