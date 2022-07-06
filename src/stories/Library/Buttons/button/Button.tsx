import { ReactComponent as ArrowSmallRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export type ButtonProps = {
  label: string;
  buttonType: "none" | "default" | "external-link" | "search";
  disabled: boolean;
  collapsible: boolean;
  size: "large" | "medium" | "small" | "xsmall";
  variant: "outline" | "filled";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  buttonType,
  disabled,
  collapsible,
  size,
  variant,
  onClick,
}) => {
  const iconClassName = `btn-icon ${collapsible ? "btn-collapsible" : ""}`;

  const Icon = () => {
    if (variant !== "outline") return null;

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
          src="icons/buttons/icon-btn-external-link.svg"
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
    if (size === "xsmall") return "btn-xsmall";
    return "";
  };

  const getVariant = () => {
    if (variant === "filled") return "btn-filled";
    if (variant === "outline") return "btn-outline";
    return "";
  };

  return (
    <button
      type="button"
      className={`btn-primary ${getVariant()} ${getSize()} arrow__hover--right-small`}
      disabled={disabled}
      onClick={onClick}
    >
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <Icon />
    </button>
  );
};
