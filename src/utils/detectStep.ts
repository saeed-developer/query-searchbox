import { TDetectStep } from "../types/filter";
import { removeQuotesIfExists, splitText } from "./quotesHandler";
import { isArrContainsItem } from "./isArrContainsItem";

export function detectStep({
  operators,
  filters,
  filterTypes,
  inputValue,
}: TDetectStep): number {
  const text = inputValue.trimEnd();
  if (!text) {
    return 1;
  }
  console.log("text", text);
  const words = splitText(text);

  console.log("words", words);
  const lastWord = removeQuotesIfExists(words.at(-1) as string);
  console.log("last word", lastWord);
  if (isArrContainsItem(filters, lastWord)) {
    return 2;
  } else if (isArrContainsItem(filterTypes, lastWord)) {
    return 3;
  } else if (isArrContainsItem(operators, lastWord)) {
    return 1;
  } else if (isArrContainsItem(filterTypes, words.at(-2))) {
    return 4;
  }
  return 0;
}
