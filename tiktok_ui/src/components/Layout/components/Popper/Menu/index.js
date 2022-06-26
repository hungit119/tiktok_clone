import React from "react";
import Style from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Layout/components/Popper";
import MenuItem from "./MenuItem";
const cx = classNames.bind(Style);

const Menu = ({ children, items = [] }) => {
  console.log(items);
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive={true}
      placement="bottom-end"
      delay={[0, 700]}
      render={(attr) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper className={cx("menu-popper")}>
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
