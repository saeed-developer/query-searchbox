import Button, { ButtonProps } from "./Button";
import SearchBox, { searchBoxProps } from "./SearchBox";
import styles from "./querySearchBox.module.css";
import "./global.css";
import { memo, useState } from "react";
interface querySearchBoxProps extends Omit<searchBoxProps , 'inputValue' | 'setInputValue'> , ButtonProps {}
const QuerySearchBox = memo((props: querySearchBoxProps) => {
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
  const [inputValue, setInpuValue] = useState<string>("");
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
        inputValue = {inputValue}
        setInpuValue = {setInpuValue}
      />
      <Button
        title={title}
        color={color}
        background={background}
        height={height}
        width={width}
        fontSize={fontSize}
        onClick={onClick}
        onClickValue={inputValue}
      />
    </div>
  );
})

export default QuerySearchBox
