import React, { useEffect, useRef } from "react";

export type CheckboxProps = {
  isChecked: boolean;
  label?: string;
};

export const Checkbox = (props: CheckboxProps) => {
  const { isChecked, label } = props;
  const checkboxId = useRef(`checkbox_id__${Date.now()}`);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    require("./initcheckbox");
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = isChecked;
    }
  }, [isChecked]);

  return (
    <div onClick={(e) => window.eventCheckbox(e)}>
      <input
        id={checkboxId.current}
        className="checkbox-input"
        type="checkbox"
        defaultChecked={isChecked}
        ref={inputRef}
      />
      <label className="checkbox" htmlFor={checkboxId.current}>
        <span>
          <svg width="20px" height="20px">
            <polyline
              points="1.5 6 4.5 9 10.5 1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};

declare global {
  interface Window {
    eventCheckbox: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
  }
}
