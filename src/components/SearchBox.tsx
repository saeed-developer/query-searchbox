import { useEffect, useMemo, useState } from "react";
import styles from "./searchBox.module.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { TUseSuggestion } from "../types/filter";
import { TSearchBox } from "../types/searchBox";
import { ButtonProps } from "./Button";
interface searchBoxProps extends TUseSuggestion, TSearchBox {}
const SearchBox = (props: searchBoxProps) => {
  const { backgroundColor, placeHolder = "search" } = props;
  const [step, setStep] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState("");
  const [inputValue, setInpuValue] = useState<string>();
  const containerStyles = useMemo(() => {
    return { backgroundColor: backgroundColor };
  }, [backgroundColor]);
  useEffect(() => {
    if (!inputValue?.slice(-1)) {
      setCurrentValue("");
    }
    // setCurrentValue()
  }, [inputValue]);
  return (
    <div>
      <div
        style={{ ...containerStyles }}
        className={styles["searchBoxContainer"]}
      >
        <SearchIcon className={styles["searchBoxContainer-icon"]} />
        <input
          type="text"
          name="search"
          placeholder={placeHolder}
          value={inputValue}
          onChange={(e) => setInpuValue(e.target.value)}
          className={styles["searchBoxContainer-input"]}
        />
      </div>
    </div>
  );
};

export default SearchBox;
