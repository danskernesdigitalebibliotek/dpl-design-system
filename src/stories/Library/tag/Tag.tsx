import clsx from "clsx";

type TagProps = {
  children: React.ReactNode;
  size?: "small" | "large";
  hasBackground?: boolean;
  className?: string;
};

export const Tag = ({
  children,
  size = "small",
  hasBackground = false,
  className,
}: TagProps) => {
  return (
    <div
      className={clsx(
        "tag",
        hasBackground && "tag--fill",
        `tag--${size}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
