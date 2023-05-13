import { useEffect, useMemo, useState } from "react";
import styles from "./searchBox.module.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { TUseSuggestion } from "../types/filter";
import { TSearchBox } from "../types/searchBox";
import { ButtonProps } from "./Button";
import useSuggestion from "../hooks/useSuggestion";
import Menu, { menuProps } from "./Menu";
export interface searchBoxProps extends TUseSuggestion, TSearchBox, menuProps {}
const SearchBox = (props: searchBoxProps) => {
  const {
    backgroundColor,
    placeHolder = "search",
    operators,
    filters,
    filterTypes,
    filterValues,
    onSelect,
    menuValues,
  } = props;
  const [step, setStep] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState("");
  const [inputValue, setInpuValue] = useState<string>();
  const containerStyles = useMemo(() => {
    return { backgroundColor: backgroundColor };
  }, [backgroundColor]);
  useEffect(() => {
    if (!inputValue?.slice(-1)) {
      setCurrentValue("");
      setStep((step) => step + 1);
    }
    // setCurrentValue()
  }, [inputValue]);
  const suggests = useSuggestion({
    step: step,
    currentValue: currentValue,
    operators: operators,
    filters: filters,
    filterTypes: filterTypes,
    filterValues: filterValues,
  });
  return (
    <div>
      <div
        style={{ ...containerStyles }}
        className={styles["searchBoxContainer"]}
      >
        <SearchIcon className={styles["searchBoxContainer-icon"]} />
        <div className={styles["searchBoxContainer-box"]}>
          <input
            type="text"
            name="search"
            placeholder={placeHolder}
            value={inputValue}
            onChange={(e) => setInpuValue(e.target.value)}
            className={styles["searchBoxContainer-box-input"]}
          />
        </div>
      </div>
      <div className={styles["searchBoxContainer-box-menu"]}>
        <Menu
          menuValues={[
            "ajslkdjglsdkajgl;dsj",
            "kldsjgl;adkjsglsdakjg",
            "lksdajglkasdjglkajds",
          ]}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default SearchBox;
