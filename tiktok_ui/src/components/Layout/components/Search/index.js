import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadLessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import AccountItem from "../AccountItem";
import { SearchIcon } from "../Icons";
import { Wrapper as PopperWrapper } from "../Popper";
import style from "./Search.module.scss";
const cx = classNames.bind(style);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setShowLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(true);
      });
  }, [searchValue]);

  return (
    <HeadLessTippy
      interactive={true}
      visible={showResult && searchResult.length > 0}
      render={(attr) => (
        <div className={cx("search-result")} tabIndex={-1} {...attr}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Account</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search account and video"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !showLoading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {showLoading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")} tabIndex={-1}>
          <SearchIcon width="2.4rem" height="2.4rem" />
        </button>
      </div>
    </HeadLessTippy>
  );
}

export default Search;
