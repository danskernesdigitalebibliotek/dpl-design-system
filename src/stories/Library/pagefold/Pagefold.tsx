import clsx from "clsx";

export type PagefoldProps = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  type?: "success" | "alert";
  children?: React.ReactNode;
  className?: string;
  compProps?: React.ComponentPropsWithoutRef<"div">;
  status?: "selected" | "available" | "unavailable";
  button?: boolean;
};

export const Pagefold: React.FC<PagefoldProps> = ({
  isInheriting,
  isAContainer,
  size,
  type,
  children,
  className,
  compProps,
  status,
  button,
}) => {
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

  if (button) {
    return (
      <button
        type="button"
        aria-pressed={status === "selected"}
        className={classes.wrapper}
      >
        <div className={classes.triangle} />
        {children}
      </button>
    );
  }

  if (compProps) {
    <div className={classes.wrapper} {...compProps}>
      <div className={classes.triangle} />
      {children}
    </div>;
  }

  return (
    <a className={classes.wrapper}>
      <div className={classes.triangle} />
      {children}
    </a>
  );
};
