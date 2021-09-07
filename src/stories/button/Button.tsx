import React from "react";

export type ButtonProps = {
  label: string;
  buttonType: "none" | "default" | "external-link" | "search";
  disabled: boolean;
  collapsible: boolean;
};

export const Button = (props: ButtonProps) => {
  const { label, buttonType, disabled, collapsible } = props;
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

  return (
    <button type="button" className={`btn-primary`} disabled={disabled}>
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <Icon />
    </button>
  );
};
