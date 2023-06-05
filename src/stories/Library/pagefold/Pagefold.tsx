import { getPagefoldClasses } from "../Buttons/button/helper";

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

  const classes = getPagefoldClasses({
    isInheriting,
    isAContainer,
    size,
    type,
    className,
  });

  return (
    <div className={classes.wrapper} {...compProps}>
      <div className={classes.triangle} />
      {children}
    </div>
  );
};
