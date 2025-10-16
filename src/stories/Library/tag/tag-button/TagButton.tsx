import { useState } from "react";
import clsx from "clsx";

type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  usesCursor?: boolean;
  hasBackground?: boolean;
  showCloseIcon?: boolean;
  isClickable?: boolean;
  className?: string;
};

export const TagButton = ({
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
        "tag tag--outline",
        (hasBackground || selected) && "tag--fill",
        usesCursor && "cursor-pointer",
        `tag--${size}`,
        className,
      )}
    >
      {children}
      {showCloseIcon && (
        <img
          className="tag-icon"
          src="icons/basic/icon-cross.svg"
          alt="close icon"
        />
      )}
    </button>
  );
};

export default TagButton;
