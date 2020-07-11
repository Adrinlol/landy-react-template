import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";

const TemporaryFallback = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Loader
      type="Triangle"
      color="rgb(33, 36, 37)"
      height={120}
      width={120}
      timeout={3000}
      style={style}
    />
  );
};

const Router = () => {
  return (
    <Suspense fallback={<TemporaryFallback />}>
      <Header />
      <Switch>
        {routes.map(({ path, page }, key) => (
          <Route
            key={key}
            exact
            path={`${path}`}
            component={lazy(() => import(`../pages/${page}`))}
          />
        ))}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
