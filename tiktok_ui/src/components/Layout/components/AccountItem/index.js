import React from "react";
import classNames from "classnames/bind";
import Style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1654848000&x-signature=tYADoINWKFqpcYAVnGVyhIUukXE%3D"
        alt="Hoa"
      />
      <div className={cx("infor")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCircleCheck} />
        </p>
        <p className={cx("usename")}>Hoaa</p>
      </div>
    </div>
  );
};

export default AccountItem;
