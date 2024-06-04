import clsx from "clsx";
import { ReactComponent as CrossIcon } from "../../../public/icons/basic/icon-cross.svg";

export type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  hasBackground?: boolean;
  showCloseIcon?: boolean;
  className?: string;
};

const Tag = ({
  children,
  size = "small",
  hasBackground = false,
  showCloseIcon = false,
  className,
}: TagProps) => {
  return (
    <span
      className={clsx(
        "tag",
        hasBackground && "tag--fill",
        `tag--${size}`,
        className
      )}
    >
      {children}
      {showCloseIcon && <CrossIcon className="tag-icon" />}
    </span>
  );
};

export default Tag;
