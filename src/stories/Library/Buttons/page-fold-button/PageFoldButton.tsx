import { getPagefoldClasses } from "../button/helper";

type Props = {
  isInheriting: boolean;
  isAContainer: boolean;
  size: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  type?: "success" | "alert";
  children?: React.ReactNode;
  className?: string;
  status?: "selected" | "available" | "unavailable";
};

const PageFoldButton = ({
  isInheriting,
  isAContainer,
  size,
  type,
  children,
  className,
  status,
}: Props) => {
  const classes = getPagefoldClasses({
    isInheriting,
    isAContainer,
    size,
    type,
    className,
  });

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
};

export default PageFoldButton;
