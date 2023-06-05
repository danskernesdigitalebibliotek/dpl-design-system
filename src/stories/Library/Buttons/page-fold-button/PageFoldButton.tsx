import { PageFoldType } from "../../pagefold/types";
import { getPagefoldClasses } from "../button/helper";

type PageFoldButtonProps = PageFoldType & {
  children?: React.ReactNode;
};

const PageFoldButton = ({
  isInheriting,
  isAContainer,
  size,
  type,
  children,
  className,
  status,
}: PageFoldButtonProps) => {
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
