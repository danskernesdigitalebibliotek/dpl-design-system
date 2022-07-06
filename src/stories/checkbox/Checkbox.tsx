import React, { useState, useRef } from "react";

export type CheckboxProps = {
  isChecked: boolean;
  label?: string;
  ariaLabel?: string;
  callback?: (isChecked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  label,
  ariaLabel,
  callback,
}) => {
  const checkboxId = useRef(`checkbox_id__${Math.random()}`);
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    if (callback) {
      callback(!checked);
    }
    setChecked(!checked);
  };

  return (
    <div className="checkbox">
      <input
        id={checkboxId.current}
        className="checkbox__input"
        type="checkbox"
        aria-label={ariaLabel}
        checked={checked}
        onClick={handleClick}
      />
      <label className="checkbox__label" htmlFor={checkboxId.current}>
        <span className="checkbox__icon">
          {/* The svg is inline since it should be white.
          The stroke color is manipulated with css. */}
          <svg width="20px" height="20px">
            <polyline
              points="1.5 6 4.5 9 10.5 1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
        {label && (
          <span className="checkbox__text text-small-caption color-secondary-gray">
            {label}
          </span>
        )}
      </label>
    </div>
  );
};
