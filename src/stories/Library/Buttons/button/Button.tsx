import { ReactComponent as ArrowSmallRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconExternalLink } from "../../Icons/icon-external-link/IconExternalLink";

export type ButtonProps = {
  label: string;
  buttonType: "none" | "default" | "external-link" | "search";
  disabled: boolean;
  collapsible: boolean;
  size: "xlarge" | "large" | "medium" | "small" | "xsmall";
  variant: "outline" | "filled";
  onClick?: () => void;
  classNames?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  buttonType,
  disabled,
  collapsible,
  size,
  variant,
  onClick,
  classNames,
}) => {
  const iconClassName = `ml-16 btn-icon ${
    collapsible ? "btn-collapsible" : ""
  }`;

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
        <div className={iconClassName}>
          <IconExternalLink />
        </div>
      );
    }
    return null;
  };

  const getSize = () => {
    if (size === "xlarge") return "btn-xlarge";
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
      className={`btn-primary ${getVariant()} ${getSize()} arrow__hover--right-small ${classNames}`}
      disabled={disabled}
      onClick={onClick}
    >
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <Icon />
    </button>
  );
};
