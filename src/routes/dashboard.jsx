import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Roster from "views/Roster/Roster.jsx";
import Calender from "views/Calender/Calender.jsx";
import {
  Dashboard,
  Person,
  Schedule,
  Devices,
  TrackChanges,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  AccessTime,
LiveHelp,
  CreateNewFolder,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
    {
    path: "/home/servicedesk",
    sidebarName: "Service Desk",
    navbarName: "Service Desk",
    icon: Dashboard,
    isLancher: true,
    component: DashboardPage
  },
  {
    path: "/home/calender",
    sidebarName: "Calender",
    navbarName: "Calender",
    icon: Schedule,
    component: Calender
  },
  {
    path: "/home/assetmanager",
    sidebarName: "Asset Manager",
    navbarName: "Asset Manager",
    icon: Devices,
    isLancher: true,
    component: DashboardPage
  },
  {
    path: "/home/helpcenter",
    sidebarName: "Help center",
    navbarName: "Help center",
    icon: LiveHelp,
    isLancher: true,
    component: DashboardPage
  },
  {
    path: "/home/fileexchange",
    sidebarName: "File exchange",
    navbarName: "File exchange",
    icon: CreateNewFolder,
    component: DashboardPage
  },
  {
    path: "/home/roster",
    sidebarName: "Roster",
    navbarName: "Roster",
    icon: Person,
    component: Roster
  },
  {
    path: "/home/monitoring",
    sidebarName: "Monitoring",
    navbarName: "Monitoring",
    icon: TrackChanges,
    isLancher: true,
    component: Roster
  },
  { redirect: true, path: "/home", to: "/home/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
