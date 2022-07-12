import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadLessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import search from "~/apiServices/searchSevice";
import { useDeBounce } from "~/hooks";
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

  const debounce = useDeBounce(searchValue, 500);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setShowLoading(true);
      const result = await search(debounce, "less");
      setSearchResult(result);
      setShowLoading(false);
    };
    fetchApi();
  }, [debounce]);

  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context
    <div>
      <HeadLessTippy
        interactive={true}
        appendTo={() => document.body}
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
            onChange={handleChange}
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

          <button
            className={cx("search-btn")}
            tabIndex={-1}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon width="2.4rem" height="2.4rem" />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
