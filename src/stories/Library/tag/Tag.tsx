import clsx from "clsx";

export type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  hasBackground?: boolean;
  className?: string;
};

const Tag = ({
  children,
  size = "small",
  hasBackground = false,
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
    </span>
  );
};

export default Tag;
