import Welcome from "../pages/auth/Welcome";
import Dashboard from "../pages/home/Dashboard";
import { Favorite } from "../pages/home/Favorite";
import { Search } from "../pages/home/Search";
import { Empty } from "../pages/home/Empty";

const Routes = [
  {
    path: "/welcome",
    name: "welcome",
    exact: true,
    pageTitle: "Welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "home",
    exact: true,
    pageTitle: "Home",
    component: Dashboard,
  },
  {
    path: "/home/favorite",
    name: "favorite",
    exact: true,
    pageTitle: "Favorite",
    component: Favorite,
  },
  {
    path: "/home/search",
    name: "search",
    exact: true,
    pageTitle: "Search",
    component: Search,
  },
  {
    path: "/home/empty",
    name: "empty",
    exact: true,
    pageTitle: "Empty",
    component: Empty,
  },
];

export default Routes;
