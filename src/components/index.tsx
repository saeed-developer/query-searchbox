import Button, { ButtonProps } from "./Button";
import SearchBox, { searchBoxProps } from "./SearchBox";
import styles from "./querySearchBox.module.css";
import "./global.css";
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
    onStepChange,
    onInputChange,
    onCurrentChange,
    localSearchOnSteps,
    menuLoading,
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
        onStepChange={onStepChange}
        onInputChange={onInputChange}
        onCurrentChange={onCurrentChange}
        localSearchOnSteps={localSearchOnSteps}
        menuLoading={menuLoading}
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
