import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Roster from "views/Roster/Roster.jsx";
import Calender from "views/Calender/Calender.jsx";
import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";


const dashboardRoutes = [
    {
    path: "/servicedesk",
    sidebarName: "Service Desk",
    navbarName: "Service Desk",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/calender",
    sidebarName: "Calender",
    navbarName: "Calender",
    icon: Dashboard,
    component: Calender
  },
  {
    path: "/assetmanager",
    sidebarName: "Asset Manager",
    navbarName: "Asset Manager",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/helpcenter",
    sidebarName: "Help center",
    navbarName: "Help center",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/fileexchange",
    sidebarName: "File exchange",
    navbarName: "File exchange",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/roster",
    sidebarName: "Roster",
    navbarName: "Roster",
    icon: Person,
    component: Roster
  },
  {
    path: "/monitoring",
    sidebarName: "Monitoring",
    navbarName: "Monitoring",
    icon: Person,
    component: Roster
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
