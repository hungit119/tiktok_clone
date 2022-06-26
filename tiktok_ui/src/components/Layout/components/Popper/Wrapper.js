import React from "react";
import classNames from "classnames/bind";
import Style from "./Popper.module.scss";
const cx = classNames.bind(Style);

const Wrapper = ({ children, className }) => {
  return <div className={cx("wrapper", className)}>{children}</div>;
};

export default Wrapper;
