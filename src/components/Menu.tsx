import { useRef } from "react";
import styles from "./menu.module.css";
export interface menuProps {
  menuValues: string[];
  onSelect: (val: string) => void;
  isOpen: boolean;
}
const Menu = (props: menuProps) => {
  const { menuValues, onSelect, isOpen = false } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={ref}
      style={{ display: isOpen ? "block" : "none" }}
      className={styles["container"]}
    >
      {Array.isArray(menuValues) &&
        menuValues?.map((item) => {
          return (
            <div
              className={styles["container-row"]}
              onClick={() => {
                onSelect(item);
              }}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};
export default Menu;
