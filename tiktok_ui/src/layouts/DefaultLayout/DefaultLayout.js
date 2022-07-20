import PropTypes from "prop-types";
import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";

import React from "react";
import classNames from "classnames/bind";

import style from "./DefaultLayout.module.scss";

const cx = classNames.bind(style);
const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
