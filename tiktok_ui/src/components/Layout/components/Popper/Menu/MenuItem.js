import React from "react";
import Button from "~/components/Layout/components/Button";

import Style from "./Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Style);

const MenuItem = ({ data, onClick }) => {
  return (
    <Button
      className={cx("menu-item")}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
