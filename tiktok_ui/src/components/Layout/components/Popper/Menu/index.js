import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Layout/components/Popper";
import Header from "./Header";
import Style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(Style);

const defaultFn = () => {};

const Menu = ({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
  ...passProps
}) => {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
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
      offset={[12, 8]}
      hideOnClick={hideOnClick}
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
            <div className={cx("menu-body")}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
