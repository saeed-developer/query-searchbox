import { useEffect, useRef, useState } from "react";
import { TUseSuggestion } from "../types/filter";
function searchArray(value: string, array: string[]): string[] {
  const matchedItems: string[] = [];

  array.forEach((item) => {
    if (item.startsWith(value)) {
      matchedItems.push(item);
    }
  });

  return matchedItems;
}

interface useSuggestionProps extends TUseSuggestion {
  currentValue?: string;
  step: number;
}
const useSuggestion = (props: useSuggestionProps) => {
  const {
    filters = [],
    filterTypes = [],
    operators = [],
    currentValue = "",
    filterValues = [],
    step,
  } = props;

  const [output, setOutput] = useState<string[]>([]);
  useEffect(() => {
    let items;
    switch (step) {
      case 1:
        items = currentValue ? searchArray(currentValue, filters) : filters;
        setOutput(items);
        break;
      case 2:
        items = currentValue ? searchArray(currentValue, filterTypes) : filters;
        setOutput(items);
        break;
      case 3:
        setOutput(filterValues);
        break;
      case 4:
        items = currentValue ? searchArray(currentValue, operators) : filters;
        setOutput(items);
        break;
      default:
        break;
    }
  }, [currentValue, filters, operators, filterTypes, filterValues, step]);
  return output;
};

export default useSuggestion;
