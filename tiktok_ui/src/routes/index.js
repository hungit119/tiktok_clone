import routes from "~/config/routes";
// Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/components/pages/Home";
import Following from "~/components/pages/Following";
import Profile from "~/components/pages/Profile";
import Upload from "~/components/pages/Upload";
import Search from "~/components/pages/Search";
// Public Routes
const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.following,
    component: Following,
  },
  {
    path: routes.profile,
    component: Profile,
  },
  {
    path: routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routes.search,
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
