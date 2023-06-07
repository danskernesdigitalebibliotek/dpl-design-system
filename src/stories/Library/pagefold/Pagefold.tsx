import { getPagefoldClasses } from "../Buttons/button/helper";
import { PageFoldType } from "./types";

type PagefoldProps = PageFoldType & {
  compProps?: React.ComponentPropsWithoutRef<"div">;
  children?: React.ReactNode;
};

const Pagefold: React.FC<PagefoldProps> = (props) => {
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

export default Pagefold;
