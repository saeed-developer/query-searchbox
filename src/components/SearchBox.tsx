import { useMemo, useState } from "react";
import styles from "./searchBox.module.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
interface searchBoxProps {
  placeHolder?: string;
  backgroundColor: string;
  operator: string[];
  filters: string[];
  filterTypes: string[];
}
const SearchBox = (props: searchBoxProps) => {
  const { backgroundColor, placeHolder = "search" } = props;
  const [inputValue, setInpuValue] = useState<string>();
  const containerStyles = useMemo(() => {
    return { backgroundColor: backgroundColor };
  }, [backgroundColor]);
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
