import style from "./Header.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(style);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo */}
        {/* Search */}
      </div>
    </header>
  );
};

export default Header;
