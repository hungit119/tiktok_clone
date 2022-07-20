import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "~/components/Image/Image";

const cx = classNames.bind(Style);

const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.first_name} />
      <div className={cx("infor")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx("check-icon")}
              icon={faCircleCheck}
            />
          )}
        </p>
        <p className={cx("usename")}>{data.nickname}</p>
      </div>
    </Link>
  );
};
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
