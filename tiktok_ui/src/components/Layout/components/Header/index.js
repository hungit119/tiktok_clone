import style from "./Header.module.scss";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import HeadLessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/";
import image from "~/assets/images";
import "tippy.js/dist/tippy.css";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";
import Button from "../Button";
import Menu from "../Popper/Menu";
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from "../Icons";
import Image from "~/components/Layout/components/Image";
const cx = classNames.bind(style);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyboard shortcuts",
  },
];

const currentUser = true;

const Header = () => {
  const [searchResult, setSearchReasult] = useState([]);

  // Handle logic
  const handleMenuChange = (menuItem) => {};

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "View profile",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: "Log out",
      to: "/logout",
      separate: "separate",
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={image.logo} alt="logo" />
        </div>
        <HeadLessTippy
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
              <SearchIcon width="2.4rem" height="2.4rem" />
            </button>
          </div>
        </HeadLessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <React.Fragment>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx("actions-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx("actions-btn")}>
                  <MessageIcon width="2.8rem" height="2.8rem" />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("actions-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </React.Fragment>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1656493200&x-signature=DVFdvHmSmiBJESqslN3UBmqTois%3D"
                alt="Nguyen Van A"
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
