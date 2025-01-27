import { getItem, removeItem, setItem } from "@/lib/utils/localStorage";
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const data = getItem(key);
    return data || initialValue;
  });

  function handleDispatch(action) {
    if (typeof action === "function") {
      setValue((prevState) => {
        const newValue = action(prevState);
        setItem(key, newValue);
        return newValue;
      });
    } else {
      setValue(action);
      setItem(key, action);
    }
  }

  function clearState() {
    setValue(undefined);
    removeItem(key);
  }

  return [value, handleDispatch, clearState];
}
