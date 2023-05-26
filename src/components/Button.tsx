import { useMemo } from "react";
import styles from "./button.module.css";
export interface ButtonProps {
  buttonTitle?: string;
  buttonTitleColor?: string;
  buttonbackgroundColor?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  buttonFontSize?: string;
  onClick: (arg: unknown) => void;
  onClickValue?: unknown;
}
const Button = (props: ButtonProps) => {
  const {
    buttonTitle,
    buttonTitleColor,
    buttonbackgroundColor,
    buttonHeight,
    buttonWidth,
    buttonFontSize,
    onClick,
    onClickValue,
  } = props;
  const buttonStyles = useMemo(() => {
    return {
      color: buttonTitleColor,
      background: buttonbackgroundColor,
      height: buttonHeight,
      width: buttonWidth,
      fontSize: buttonFontSize,
    };
  }, [
    buttonTitleColor,
    buttonbackgroundColor,
    buttonHeight,
    buttonWidth,
    buttonFontSize,
  ]);
  return (
    <button
      onClick={() => onClick(onClickValue)}
      style={{ ...buttonStyles }}
      className={styles["button"]}
    >
      {buttonTitle || "Search"}
    </button>
  );
};

export default Button;
