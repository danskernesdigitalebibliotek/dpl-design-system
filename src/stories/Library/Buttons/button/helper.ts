import clsx from "clsx";
import { PageFoldType } from "../../pagefold/types";
import { ButtonSize, ButtonVariant } from "./types";

export const getSize = (size: ButtonSize): string => {
  if (size === "xlarge") return "btn-xlarge";
  if (size === "large") return "btn-large";
  if (size === "medium") return "btn-medium";
  if (size === "small") return "btn-small";
  if (size === "xsmall") return "btn-xsmall";
  return "";
};

export const getVariant = (variant: ButtonVariant): string => {
  if (variant === "filled") return "btn-filled";
  if (variant === "outline") return "btn-outline";
  return "";
};

export const getPagefoldClasses = ({
  isInheriting,
  isAContainer,
  size,
  type,
  className,
}: PageFoldType): { wrapper: string; triangle: string } => {
  return {
    wrapper: clsx(
      `pagefold-parent--${size}`,
      { "internal-pagefold-parent": isAContainer },
      className,
    ),
    triangle: clsx(
      `pagefold-triangle--${size}`,
      { [`pagefold-triangle--${type}`]: type },
      { "pagefold-inherit-parent": isInheriting },
    ),
  };
};
