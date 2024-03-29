type ContentIcon = {
  kind: "ICON";
  url: string;
  alt: string;
};

type ContentLabel = {
  kind: "LABEL";
  label: string;
};

type ContentChildren = {
  kind: "CHILDREN";
};

export type ButtonUIProps = {
  content: ContentIcon | ContentLabel | ContentChildren;
  children?: React.ReactNode;
  classes?: string;
  ariaLabel: string;
  onClick?: () => void;
  describe?: string;
};

export const ButtonUI: React.FC<ButtonUIProps> = ({
  content,
  classes,
  children,
  onClick,
  ariaLabel,
  describe,
}) => {
  const getChild = () => {
    if (content.kind === "LABEL") return content.label;

    if (content.kind === "ICON")
      return <img src={content.url} alt={content.alt} />;

    if (content.kind === "CHILDREN") return children;

    return null;
  };

  return (
    <button
      type="button"
      aria-describedby={describe}
      className={`btn-ui ${classes || ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {getChild()}
    </button>
  );
};
