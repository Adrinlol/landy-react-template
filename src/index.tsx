import { BrowserRouter, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";
import { pageView } from "./common/utils/gtm";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return <Router />;
};

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
