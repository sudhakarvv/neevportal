import DashboardPage from "views/Dashboard/Dashboard.jsx";
import  Roster from "views/Roster/Roster.jsx";
import FileExchange from "views/FileExchange/FileExchange.jsx";
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
    path: "/servicedesk",
    sidebarName: "Service Desk",
    navbarName: "Service Desk",
    icon: Dashboard,
    isLauncher: true,
    url: "http://www.google.com",
  },
  {
    path: "/calender",
    sidebarName: "Calender",
    navbarName: "Calender",
    icon: Schedule,
    component: Calender
  },
  {
    path: "/assetmanager",
    sidebarName: "Asset Manager",
    navbarName: "Asset Manager",
    icon: Devices,
    isLauncher: true,
    url: "http://www.google.com",
  },
  {
    path: "/helpcenter",
    sidebarName: "Help center",
    navbarName: "Help center",
    icon: LiveHelp,
    isLauncher: true,
    url: "http://www.google.com",
  },
  {
    path: "/fileexchange",
    sidebarName: "File exchange",
    navbarName: "File exchange",
    icon: CreateNewFolder,
    component: FileExchange
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
    icon: TrackChanges,
    isLauncher: true,
    url: "http://www.google.com",
    },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
