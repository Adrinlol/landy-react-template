import { config } from "../services/config";

const routes = [
  {
    path: config.routes.home,
    exact: true,
    component: "Home",
    protected: false,
  },
  {
    path: [config.routes.login],
    exact: true,
    component: "Login",
    protected: false,
  },
  {
    path: [config.routes.dashboard],
    exact: true,
    component: "Dashboard",
    protected: true,
  },
  {
    path: [config.routes.pricing],
    exact: false,
    component: "Pricing",
    protected: false,
  },
  {
    path: [config.routes.subscriptionSignUp],
    exact: false,
    component: "SubscriptionSignUp",
    protected: true,
  },
  {
    path: [config.routes.organizationManager],
    exact: false,
    component: "OrganizationManager",
    protected: true,
  },
];

export default routes;
