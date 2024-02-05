import { useState } from "react";
import clsx from "clsx";
import { ReactComponent as CrossIcon } from "../../../public/icons/basic/icon-cross.svg";

type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  usesCursor?: boolean;
  hasBackground?: boolean;
  showCloseIcon?: boolean;
  isClickable?: boolean;
  className?: string;
};

export const Tag = ({
  children,
  hasBackground = false,
  size = "small",
  usesCursor = true,
  showCloseIcon = false,
  isClickable = true,
  className,
}: TagProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      aria-pressed={selected}
      onClick={() => isClickable && setSelected(!selected)}
      className={clsx(
        "tag",
        (hasBackground || selected) && "tag--fill",
        usesCursor && "cursor-pointer",
        `tag--${size}`,
        className
      )}
    >
      {children}
      {showCloseIcon && <CrossIcon className="tag-icon" />}
    </button>
  );
};

export default Tag;
