import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import routes from "./config";
import GlobalStyles from "../globalStyles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
