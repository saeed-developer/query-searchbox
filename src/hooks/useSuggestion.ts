import { useEffect, useState } from "react";
import { TUseSuggestion } from "../types/filter";

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
  console.log({ step });
  const [output, setOutput] = useState<string[]>([]);
  useEffect(() => {
    switch (step) {
      case 1:
        setOutput(filters);
        break;
      case 2:
        setOutput(filterTypes);
        break;
      case 3:
        setOutput(filterValues);
        break;
      case 4:
        setOutput(operators);
        break;
      default:
        break;
    }
  }, [currentValue, filters, operators, filterTypes, filterValues, step]);
  return output;
};

export default useSuggestion;
