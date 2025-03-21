import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const Component = lazy(() =>
            import(`../pages/${routeItem.component}`)
          );
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
