import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
