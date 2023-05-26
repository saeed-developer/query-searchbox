import { Dispatch, SetStateAction } from "react";

export type TSearchBox = {
  inputPlaceHolder?: string;
  inputBackgroundColor?: string;
  inputWidth? : string;
  inputHeight? : string;
  inputFontSize? : string;
  inputColor? : string;
  inputValue  : string
  setInpuValue : Dispatch<SetStateAction<string>>
};
