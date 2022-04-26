import clsx from "clsx";
import React from "react";

export type PagefoldProps = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  type?: string;
  children?: React.ReactNode;
  className?: string;
  compProps?: React.ComponentPropsWithoutRef<"div">;
};

export const Pagefold = (props: PagefoldProps) => {
  const {
    isInheriting,
    isAContainer,
    size,
    type,
    children,
    className,
    compProps,
  } = props;

  const classes = {
    wrapper: clsx(
      `pagefold-parent--${size}`,
      { "internal-pagefold-parent": isAContainer },
      className
    ),
    content: clsx(type, `pagefold-triangle--${size}`, {
      "pagefold-inherit-parent": isInheriting,
    }),
  };

  return (
    <div className={classes.wrapper} {...compProps}>
      <div className={classes.content} />
      {children}
    </div>
  );
};
