import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./searchBox.module.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { TDetectStep, TUseSuggestion } from "../types/filter";
import { TSearchBox } from "../types/searchBox";
import useSuggestion from "../hooks/useSuggestion";
import Menu, { menuProps } from "./Menu";
export interface searchBoxProps
  extends TUseSuggestion,
    TSearchBox,
    Partial<menuProps> {
  onStepChange?: (value: number) => void;
  onInputChange?: (value: string) => void;
  onCurrentChange?: (value: string) => void;
  localSearchOnSteps?: number[];
}
function detectStep({
  operators,
  filters,
  filterTypes,
  inputValue,
}: TDetectStep): number {
  const text = inputValue.trimEnd();
  if (!text) {
    return 1;
  }
  const words = text.split(" ");
  const lastWord = words.at(-1);
  if (filters.includes(lastWord as string)) {
    return 2;
  } else if (filterTypes.includes(lastWord as string)) {
    return 3;
  } else if (operators.includes(lastWord as string)) {
    return 1;
  } else if (filterTypes.includes(words.at(-2) as string)) {
    return 4;
  }
  return 0;
}
const SearchBox = (props: searchBoxProps) => {
  const {
    backgroundColor,
    placeHolder = "search",
    operators,
    filters,
    filterTypes,
    filterValues,
    onSelect,
    onStepChange,
    onInputChange,
    onCurrentChange,
    localSearchOnSteps,
  } = props;

  const [step, setStep] = useState<number>(1);
  const [currentValue, setCurrentValue] = useState("");
  const [inputValue, setInpuValue] = useState<string>("");
  const [filtredSuggestion, setFiltredSuggestion] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerStyles = useMemo(() => {
    return { backgroundColor: backgroundColor };
  }, [backgroundColor]);
  useEffect(() => {
    console.log(inputRef?.current?.selectionStart);
    if (inputValue?.slice(-1) === " " || !inputValue.trim()) {
      setCurrentValue("");
      const stepNumber = detectStep({
        operators,
        filters,
        filterTypes,
        inputValue,
      });
      setStep(stepNumber);
    }
  }, [inputValue, filterTypes, filters, operators]);
  useEffect(() => {
    onStepChange && onStepChange(step);
  }, [step, onStepChange]);
  useEffect(() => {
    onCurrentChange && onCurrentChange(currentValue);
  }, [currentValue, onCurrentChange]);
  const suggests = useSuggestion({
    step: step,
    currentValue: currentValue,
    operators: operators,
    filters: filters,
    filterTypes: filterTypes,
    filterValues: filterValues,
  });

  useEffect(() => {
    if (localSearchOnSteps?.includes(step)) {
      const filtredSuggestion = suggests?.filter((item) =>
        item?.startsWith(currentValue)
      );
      setFiltredSuggestion(filtredSuggestion);
    }
  }, [step, currentValue, localSearchOnSteps, suggests]);
  return (
    <div>
      <div
        style={{ ...containerStyles }}
        className={styles["searchBoxContainer"]}
      >
        <SearchIcon className={` ${styles["searchBoxContainer-icon"]}`} />
        <div className={styles["searchBoxContainer-box"]}>
          <input
            ref={inputRef}
            type="text"
            name="search"
            placeholder={placeHolder}
            value={inputValue}
            onChange={(e) => {
              setInpuValue(e.target.value);
              console.log(e.target.value.slice(-1));
              setCurrentValue((value) => value + e.target.value.slice(-1));
              onInputChange && onInputChange(e.target.value);
            }}
            className={styles["searchBoxContainer-box-input"]}
          />
        </div>
      </div>
      <div className={styles["searchBoxContainer-box-menu"]}>
        <Menu
          menuValues={
            filtredSuggestion?.length > 0 ? filtredSuggestion : suggests
          }
          onSelect={(value) => {
            setInpuValue(inputValue + value + " ");
            onSelect && onSelect(value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
