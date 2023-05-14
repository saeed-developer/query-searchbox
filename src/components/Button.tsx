import { useMemo } from "react";
import styles from "./button.module.css";
export interface ButtonProps {
  title?: string;
  color?: string;
  background?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = (props: ButtonProps) => {
  const { title, color, background, height, width, fontSize, onClick } = props;
  const buttonStyles = useMemo(() => {
    return { color, background, height, width, fontSize };
  }, [color, background, height, width, fontSize]);
  return (
    <button
      onClick={onClick}
      style={{ ...buttonStyles }}
      className={styles["button"]}
    >
      {title || "Search"}
    </button>
  );
};

export default Button;
