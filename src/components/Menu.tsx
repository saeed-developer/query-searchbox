import styles from "./menu.module.css";
export interface menuProps {
  menuValues: string[];
  onSelect: (val: string) => void;
}
const Menu = (props: menuProps) => {
  const { menuValues, onSelect } = props;
  return (
    <div className={styles["container"]}>
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
