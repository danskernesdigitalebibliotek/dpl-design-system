import clsx from "clsx";

type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  hasBackground?: boolean;
  showCloseIcon?: boolean;
  className?: string;
};

export const TagLink = ({
  children,
  size = "small",
  hasBackground = false,
  showCloseIcon = false,
  className,
}: TagProps) => {
  return (
    <a
      href="#"
      className={clsx(
        "tag",
        hasBackground && "tag--fill",
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
    </a>
  );
};

export default TagLink;
