const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/login",
    exact: true,
    component: "Login",
  },
  {
    path: "/register",
    exact: true,
    component: "Register",
  },
  {
    path: "/admin",
    exact: true,
    component: "Admin",
    protected: true,
  },
  {
    path: "/albayan",
    exact: true,
    component: "Exams/Albayan",
  },
  {
    path: "/alif",
    exact: true,
    component: "Exams/Alif",
  },
];

export default routes;
