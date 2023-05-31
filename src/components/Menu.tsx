import { useEffect, useRef } from "react";
import styles from "./menu.module.css";
import { addQuotesIfWhitespace } from "../utils/QuotesHandler";
export interface menuProps {
  menuValues: string[];
  onSelect: (val: string) => void;
  isOpen: boolean;
  menuLoading?: boolean;
}
const Menu = (props: menuProps) => {
  const { menuValues, onSelect, isOpen, menuLoading = false } = props;
  const menuLastState = useRef(false);
  useEffect(() => {
    menuLastState.current = isOpen;
  }, [isOpen]);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClick = (item: string) => {
    const selected = addQuotesIfWhitespace(item);
    onSelect(selected);
  };
  return (
    <div
      ref={ref}
      className={`${styles["container"]} ${
        isOpen
          ? styles["isOpen"]
          : menuLastState.current === true && styles["isClose"]
      }`}
    >
      {menuLoading && <div className="spinner" />}
      {Array.isArray(menuValues) &&
        !menuLoading &&
        menuValues?.map((item) => {
          return (
            <div className={styles["container-row"]} onClick={handleClick}>
              {item}
            </div>
          );
        })}
    </div>
  );
};
export default Menu;
