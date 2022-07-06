import clsx from "clsx";
import React from "react";

export type PagefoldProps = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  type?: "success" | "alert";
  children?: React.ReactNode;
  className?: string;
  compProps?: React.ComponentPropsWithoutRef<"div">;
};

export const Pagefold: React.FC<PagefoldProps> = (props) => {
  const {
    isInheriting,
    isAContainer,
    size,
    type,
    children,
    className,
    compProps,
  } = props;

  const baseClass = `pagefold-triangle--${size}`;

  const classes = {
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

  return (
    <div className={classes.wrapper} {...compProps}>
      <div className={classes.triangle} />
      {children}
    </div>
  );
};
