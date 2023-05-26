import { Dispatch, SetStateAction } from "react";

export type TSearchBox = {
  placeHolder?: string;
  backgroundColor?: string;
  inputValue  : string
  setInpuValue : Dispatch<SetStateAction<string>>
};
