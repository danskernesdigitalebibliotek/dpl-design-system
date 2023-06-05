import clsx from "clsx";

export type ButtonType = "none" | "default" | "external-link" | "search";
export type ButtonVariant = "outline" | "filled";
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export const getSize = (size: ButtonSize) => {
  if (size === "xlarge") return "btn-xlarge";
  if (size === "large") return "btn-large";
  if (size === "medium") return "btn-medium";
  if (size === "small") return "btn-small";
  if (size === "xsmall") return "btn-xsmall";
  return "";
};

export const getVariant = (variant: ButtonVariant) => {
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
}: PageFoldType) => {
  const baseClass = `pagefold-triangle--${size}`;

  return {
    wrapper: clsx(
      `pagefold-parent--${size}`,
      { "internal-pagefold-parent": isAContainer },
      className
    ),
    triangle: clsx(
      { [`${baseClass}--${type}`]: type },
      `pagefold-triangle--${size}`,
      { "pagefold-inherit-parent": isInheriting }
    ),
  };
};
