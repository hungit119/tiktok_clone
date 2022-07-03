import { useState, useEffect } from "react";

function useDeBounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handleTimeout = setTimeout(() => {
      setDebounceValue(value, delay);
    }, delay);

    return () => clearTimeout(handleTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

export default useDeBounce;
