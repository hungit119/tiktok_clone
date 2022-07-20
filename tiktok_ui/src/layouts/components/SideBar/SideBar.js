import React from "react";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "~/config";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import {
  HomeIcon,
  LiveIcon,
  UserGroupIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";

const cx = classNames.bind(style);
const SideBar = () => {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
    </aside>
  );
};

export default SideBar;
