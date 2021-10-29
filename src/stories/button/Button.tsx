import React from "react";

export type ButtonProps = {
  label: string;
  buttonType: "none" | "default" | "external-link" | "search";
  disabled: boolean;
  collapsible: boolean;
  size: "large" | "medium" | "small";
};

export const Button = (props: ButtonProps) => {
  const { label, buttonType, disabled, collapsible, size } = props;
  const iconClassName = `btn-icon ${collapsible ? "btn-collapsible" : ""}`;

  const Icon = () => {
    if (buttonType === "default") {
      return (
        <img
          className={iconClassName}
          src={`icons/buttons/icon-btn-arrow.svg`}
          alt="arrow"
        />
      );
    }

    if (buttonType === "external-link") {
      return (
        <img
          className={iconClassName}
          src={`icons/buttons/icon-btn-external-link.svg`}
          alt="external-link"
        />
      );
    }

    return null;
  };

  const getSize = () => {
    if (size === "large") return "btn-large";
    if (size === "medium") return "btn-medium";
    if (size === "small") return "btn-small";
    return "";
  };

  return (
    <button
      type="button"
      className={`btn-primary ${getSize()}`}
      disabled={disabled}
    >
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <Icon />
    </button>
  );
};
