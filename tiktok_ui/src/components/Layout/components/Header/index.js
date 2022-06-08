import style from "./Header.module.scss";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import image from "~/assets/images";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";
const cx = classNames.bind(style);

const Header = () => {
  const [searchResult, setSearchReasult] = useState([]);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={image.logo} alt="logo" />
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attr) => (
            <div className={cx("search-result")} tabIndex={-1} {...attr}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and video" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />

            <button className={cx("search-btn")} tabIndex={-1}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
};

export default Header;
