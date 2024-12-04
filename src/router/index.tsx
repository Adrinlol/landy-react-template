import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        <Route element={<Home />} path="*" />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
