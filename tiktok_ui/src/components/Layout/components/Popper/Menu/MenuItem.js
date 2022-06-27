import React from "react";
import Button from "~/components/Layout/components/Button";

import Style from "./Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Style);

const MenuItem = ({ data, onClick }) => {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
