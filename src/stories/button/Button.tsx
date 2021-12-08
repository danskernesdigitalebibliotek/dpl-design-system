import { ReactComponent as ArrowSmallRight } from "../../icons/arrow-ui/icon-arrow-ui-small-right.svg";

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
        <div className="ml-16">
          <ArrowSmallRight />
        </div>
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
      className={`btn-primary ${getSize()} arrow-hover-right-small`}
      disabled={disabled}
    >
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <Icon />
    </button>
  );
};
