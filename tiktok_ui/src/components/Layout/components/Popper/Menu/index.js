import React, { useState } from "react";
import Style from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Layout/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
const cx = classNames.bind(Style);

const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn }) => {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  console.log(items);
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive={true}
      placement="bottom-end"
      delay={[0, 700]}
      render={(attr) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={"Language"}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
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
