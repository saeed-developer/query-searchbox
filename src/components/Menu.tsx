import styles from "./menu.module.css";
export interface menuProps {
  menuValues: string[];
  onSelect: () => void;
}
const Menu = (props: menuProps) => {
  const { menuValues, onSelect } = props;
  return (
    <div className={styles["container"]}>
      {Array.isArray(menuValues) &&
        menuValues?.map((item) => {
          return <div onClick={onSelect}>{item}</div>;
        })}
    </div>
  );
};
export default Menu;
