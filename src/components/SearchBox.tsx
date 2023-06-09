import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./searchBox.module.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { TUseSuggestion } from "../types/filter";
import { TSearchBox } from "../types/searchBox";
import useSuggestion from "../hooks/useSuggestion";
import Menu, { menuProps } from "./Menu";
import { useFocusedElement } from "../hooks/useFocusedElement";
import { detectStep } from "../utils/detectStep";
export interface searchBoxProps
  extends TUseSuggestion,
    TSearchBox,
    Partial<menuProps> {
  onStepChange?: (value: number) => void;
  onInputChange?: (value: string) => void;
  onCurrentChange?: (value: string) => void;
  localSearchOnSteps?: number[];
}

const SearchBox = (props: searchBoxProps) => {
  const {
    inputColor,
    inputWidth,
    inputBackgroundColor,
    inputHeight,
    inputFontSize,
    inputPlaceHolder = "search",
    operators,
    filters,
    filterTypes,
    filterValues,
    onSelect,
    onStepChange,
    onInputChange,
    onCurrentChange,
    localSearchOnSteps,
    menuLoading,
    inputValue,
    setInpuValue,
  } = props;
  const [step, setStep] = useState<number>(1);
  const [currentValue, setCurrentValue] = useState("");
  const [filtredSuggestion, setFiltredSuggestion] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const suggests = useSuggestion({
    step: step,
    currentValue: currentValue,
    operators: operators,
    filters: filters,
    filterTypes: filterTypes,
    filterValues: filterValues,
  });
  const isInputFocuded = useFocusedElement({
    element: inputRef.current as HTMLInputElement,
  });
  const containerStyles = useMemo(() => {
    return {
      backgroundColor: inputBackgroundColor,
      width: inputWidth,
      height: inputHeight,
      fontSize: inputFontSize,
      color: inputColor,
    };
  }, [
    inputBackgroundColor,
    inputColor,
    inputWidth,
    inputHeight,
    inputFontSize,
  ]);
  useEffect(() => {
    const slicedInput = inputValue?.slice(
      0,
      inputRef?.current?.selectionStart as number
    );
    if (slicedInput?.slice(-1) === " " || !slicedInput.trim()) {
      setCurrentValue("");
      const stepNumber = detectStep({
        operators,
        filters,
        filterTypes,
        inputValue: slicedInput,
      });
      setStep(stepNumber);
    }
  }, [inputValue, filterTypes, filters, operators]);
  useEffect(() => {
    onStepChange && onStepChange(step);
  }, [step]);
  useEffect(() => {
    onCurrentChange && onCurrentChange(currentValue);
  }, [currentValue]);
  useEffect(() => {
    if (localSearchOnSteps?.includes(step)) {
      const filtredSuggestion = suggests?.filter((item) =>
        item?.toLocaleLowerCase()?.startsWith(currentValue.toLocaleLowerCase())
      );
      setFiltredSuggestion(filtredSuggestion);
    }
  }, [step, currentValue, localSearchOnSteps, suggests]);
  useEffect(() => {
    setFiltredSuggestion([]);
  }, [step]);
  const handleSelect = (value: string) => {
    inputRef.current?.focus();
    const arrInput = inputValue.split(" ");
    arrInput.pop();
    setInpuValue((arrInput.join(" ") + " " + value + " ").trimStart());
    onInputChange &&
      onInputChange((arrInput.join(" ") + " " + value + " ").trimStart());
    onSelect && onSelect(value);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInpuValue(e.target.value);
    setCurrentValue((value) => value + e.target.value?.slice(-1));
    onInputChange && onInputChange(e.target.value);
  };
  return (
    <div className={styles["container"]}>
      <div
        style={{ ...containerStyles }}
        className={styles["searchBoxContainer"]}
      >
        <SearchIcon className={` ${styles["searchBoxContainer-icon"]}`} />
        <div className={styles["searchBoxContainer-box"]}>
          <input
            autoComplete="off"
            ref={inputRef}
            type="text"
            name="search"
            placeholder={inputPlaceHolder}
            value={inputValue}
            onChange={handleInputChange}
            className={styles["searchBoxContainer-box-input"]}
          />
        </div>
      </div>
      <div className={styles["searchBoxContainer-box-menu"]}>
        <Menu
          menuValues={
            filtredSuggestion?.length > 0 ? filtredSuggestion : suggests
          }
          onSelect={handleSelect}
          isOpen={isInputFocuded as boolean}
          menuLoading={menuLoading}
        />
      </div>
    </div>
  );
};

export default SearchBox;
