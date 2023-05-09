import { TUseSuggestion } from "../types/filter";
import { TSearchBox } from "../types/searchBox";
import Button, { ButtonProps } from "./Button";
import SearchBox from "./SearchBox";

import styles from "./querySearchBox.module.css";
interface searchBoxProps extends TUseSuggestion, TSearchBox, ButtonProps {}
const QuerySearchBox = (props: searchBoxProps) => {
  return (
    <div className={styles["container"]}>
      <SearchBox />
      <Button />
    </div>
  );
};

export default QuerySearchBox;
