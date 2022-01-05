import React, { useState, useRef } from "react";

export type CheckboxProps = {
  isChecked: boolean;
  label?: string;
  callback?: (isChecked: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const checkboxId = useRef(`checkbox_id__${Math.random()}`);
  const [isChecked, setChecked] = useState(props.isChecked)

  const handleClick = () => {
    if (props.callback) {
      props.callback(!isChecked)
    }
    setChecked(!isChecked)
  }

  return (
    <div >
      <input
        id={checkboxId.current}
        className="checkbox-input"
        type="checkbox"
        checked={isChecked}
        onClick={handleClick}
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
        {props.label && <span>{props.label}</span>}
      </label>
    </div>
  );
};
