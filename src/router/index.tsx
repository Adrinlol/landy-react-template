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
                    const LazyComponent = lazy(
                        // @vite-ignore
                        () =>
                            import(`../pages/${routeItem.component}/index.tsx`)
                    );
                    return (
                        <Route
                            key={routeItem.component}
                            path={routeItem.path}
                            element={<LazyComponent />}
                        />
                    );
                })}
            </Routes>
            <Footer />
        </Suspense>
    );
};

export default Router;
