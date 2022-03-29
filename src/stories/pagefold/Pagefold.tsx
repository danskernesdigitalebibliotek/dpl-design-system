import React from "react";

export type PagefoldProps = {
  inherit: boolean;
  container: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  colorClass?: "success" | "alert";
  children?: React.ReactNode;
  classes?: string;
  compProps?: React.ComponentPropsWithoutRef<"div">;
};

export const Pagefold = (props: PagefoldProps) => {
  const {
    inherit,
    container,
    size,
    colorClass,
    children,
    classes,
    compProps,
  } = props;
  const containerClass = container ? "internal-pagefold-parent" : "";

  const parent = `pagefold-parent--${size} ${containerClass}  ${classes || ""}`;
  const child = `pagefold-triangle--${size} ${
    inherit ? "pagefold-inherit-parent" : ""
  } ${colorClass ? colorClass : ""}`;

  return (
    <div className={parent} {...compProps}>
      <div className={child} />
      {children}
    </div>
  );
};
