import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./router";
import i18n from "./translation";

const App = () => (
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <Router />
        </I18nextProvider>
    </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
