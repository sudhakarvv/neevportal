import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "../views/Account/Login.jsx";

const indexRoutes = [{ path: "/home", exact:false, component: Dashboard },
{ path: "/login",exact:true, component: Login },{ path: "/",exact:false, component: Login }];

export default indexRoutes;
