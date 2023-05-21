import { useEffect, useState } from "react";
interface useSuggestionProps {
  element: HTMLElement;
}
export const useFocusedElement = (props: useSuggestionProps) => {
  const { element } = props;
  const [isElementFocused, setIsElementFocused] = useState<boolean>(false);
  useEffect(() => {
    const handleFocusChange = () => {
      if (!isElementFocused) {
        setIsElementFocused(document.activeElement === element);
      } else {
        setTimeout(() => {
          setIsElementFocused(document.activeElement === element);
        }, 150);
      }
    };
    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("focusout", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("focusout", handleFocusChange);
    };
  }, [element, isElementFocused]);
  return isElementFocused;
};
