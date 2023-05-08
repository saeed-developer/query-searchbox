import Button from "./Button";
import SearchBox from "./SearchBox";

import styles from "./querySearchBox.module.css";
const QuerySearchBox = () => {
  return (
    <div className={styles["container"]}>
      <SearchBox />
      <Button />
    </div>
  );
};

export default QuerySearchBox;
