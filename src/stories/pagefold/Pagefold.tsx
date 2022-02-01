import React from "react";

type PagefoldProps = {
  inherit: boolean;
  container: boolean;
  size: "small" | "medium" | "large" | "xlarge";
  children?: React.ReactNode;
  classes?: string;
  compProps?: React.ComponentPropsWithoutRef<"div">;
};

export const Pagefold = (props: PagefoldProps) => {
  const { inherit, container, size, children, classes, compProps } = props;
  const containerClass = container ? "internal-pagefold-parent" : "";

  const parent = `pagefold-parent--${size} ${containerClass} ${classes || ""}`;
  const child = `pagefold-triangle--${size} ${
    inherit ? "pagefold-inherit-parent" : ""
  }`;

  return (
    <div className={parent} {...compProps}>
      <div className={child} />
      {children}
    </div>
  );
};
