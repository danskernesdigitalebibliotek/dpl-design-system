import clsx from "clsx";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";
import { IconExternalLink } from "../Icons/icon-external-link/IconExternalLink";

export type LinkButtonProps = {
  href: string;
  text: string;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  variant: "outline" | "filled";
  classNames?: string;
  buttonType?: "default" | "external-link";
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const LinkButton = ({
  href,
  text,
  classNames,
  size,
  variant,
  buttonType,
  target,
}: LinkButtonProps) => {
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
        <div className="ml-16 btn-icon">
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
    <a
      target={target}
      href={href}
      className={clsx(
        "btn-primary",
        getVariant(),
        getSize(),
        "arrow__hover--right-small",
        "btn-link",
        classNames
      )}
    >
      {text}
      <Icon />
    </a>
  );
};
