export type TUseSuggestion = {
  operators: string[];
  filters: string[];
  filterTypes: string[];
  filterValues?: string[];
};

export type TDetectStep = {
  inputValue: string;
} & Omit<TUseSuggestion, "filterValues">;
