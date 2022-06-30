import { forwardRef } from "react";
import image from "~/assets/images";
import { useState } from "react";
import classNames from "classnames/bind";

import Styles from "./Image.module.scss";

const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = image.noImage, ...props },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");
    const handleError = () => {
      setFallBack(customFallback);
    };
    return (
      <img
        className={classNames(Styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
      ></img>
    );
  }
);

export default Image;
