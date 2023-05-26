import Button, { ButtonProps } from "./Button";
import SearchBox, { searchBoxProps } from "./SearchBox";
import styles from "./querySearchBox.module.css";
import "./global.css";
import { memo, useState } from "react";
interface querySearchBoxProps
  extends Omit<searchBoxProps, "inputValue" | "setInputValue">,
    ButtonProps {}
const QuerySearchBox = memo((props: querySearchBoxProps) => {
  const {
    operators,
    filters,
    filterTypes,
    filterValues,
    inputPlaceHolder,
    inputBackgroundColor,
    inputWidth,
    inputHeight,
    inputFontSize,
    inputColor,
    buttonTitle,
    buttonTitleColor,
    buttonbackgroundColor,
    buttonHeight,
    buttonWidth,
    buttonFontSize,
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
        inputPlaceHolder={inputPlaceHolder}
        inputBackgroundColor={inputBackgroundColor}
        menuValues={menuValues}
        onSelect={onSelect}
        onStepChange={onStepChange}
        onInputChange={onInputChange}
        onCurrentChange={onCurrentChange}
        localSearchOnSteps={localSearchOnSteps}
        menuLoading={menuLoading}
        inputValue={inputValue}
        setInpuValue={setInpuValue}
        inputColor={inputColor}
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        inputFontSize={inputFontSize}
      />
      <Button
        buttonTitle={buttonTitle}
        buttonTitleColor={buttonTitleColor}
        buttonbackgroundColor={buttonbackgroundColor}
        buttonHeight={buttonHeight}
        buttonWidth={buttonWidth}
        buttonFontSize={buttonFontSize}
        onClick={onClick}
        onClickValue={inputValue}
      />
    </div>
  );
});

export default QuerySearchBox;
