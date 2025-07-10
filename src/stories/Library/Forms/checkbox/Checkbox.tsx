import clsx from "clsx";
import React, { useState, useRef } from "react";

export type CheckboxProps = {
  isChecked: boolean;
  label?: string;
  ariaLabel?: string;
  labelLinkText?: string;
  labelLinkHref?: string;
  validation?: string;
  callback?: (isChecked: boolean) => void;
  hiddenLabel: boolean;
  classNames?: string;
  labelClassName?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  label,
  labelLinkText,
  labelLinkHref,
  ariaLabel,
  callback,
  validation,
  hiddenLabel = false,
  classNames,
  labelClassName,
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
    <div className={`checkbox ${classNames || ""}`}>
      <input
        id={checkboxId.current}
        className="checkbox__input"
        type="checkbox"
        aria-label={ariaLabel}
        checked={checked}
        onClick={handleClick}
      />
      <label
        className={clsx("checkbox__label", labelClassName)}
        htmlFor={checkboxId.current}
      >
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
        <div>
          {label && (
            <span
              className={clsx(
                "checkbox__text text-small-caption color-secondary-gray",
                hiddenLabel && "checkbox__text--hide-visually",
              )}
            >
              {label}
            </span>
          )}
          {validation && (
            <div className="checkbox__text text-small-caption checkbox__text--validation">
              {validation}
            </div>
          )}
          {labelLinkText && (
            <a
              href={labelLinkHref}
              className="checkbox__text text-small-caption color-secondary-gray"
            >
              {labelLinkText}
            </a>
          )}
        </div>
      </label>
    </div>
  );
};
