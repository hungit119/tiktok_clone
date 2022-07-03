import React from "react";
import style from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import image from "~/assets/images";
import Image from "~/components/Layout/components/Image";
import Button from "../Button";
import { InboxIcon, MessageIcon, UploadIcon } from "../Icons";
import Menu from "../Popper/Menu";
import Search from "../Search";
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
        {/* Search */}
        <Search />

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
                  <span className={cx("badge")}>12</span>
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
                src=""
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
