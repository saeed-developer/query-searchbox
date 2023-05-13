import Button, { ButtonProps } from "./Button";
import SearchBox, { searchBoxProps } from "./SearchBox";
import styles from "./querySearchBox.module.css";
interface querySearchBoxProps extends searchBoxProps, ButtonProps {}

const QuerySearchBox = (props: querySearchBoxProps) => {
  const {
    operators,
    filters,
    filterTypes,
    filterValues,
    placeHolder,
    backgroundColor,
    title,
    color,
    background,
    height,
    width,
    fontSize,
    onClick,
    menuValues,
    onSelect,
  } = props;
  return (
    <div className={styles["container"]}>
      <SearchBox
        operators={operators}
        filters={filters}
        filterTypes={filterTypes}
        filterValues={filterValues}
        placeHolder={placeHolder}
        backgroundColor={backgroundColor}
        menuValues={menuValues}
        onSelect={onSelect}
      />
      <Button
        title={title}
        color={color}
        background={background}
        height={height}
        width={width}
        fontSize={fontSize}
        onClick={onClick}
      />
    </div>
  );
};

export default QuerySearchBox;
