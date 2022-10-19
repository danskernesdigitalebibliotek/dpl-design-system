import { useState } from "react";
import clsx from "clsx";

type TagProps = {
  label: string;
  removable?: boolean;
  facet?: boolean;
};

const Icon = () => (
  <img className="tag-icon" src="icons/basic/icon-cross.svg" alt="close icon" />
);

export const Tag = ({ label, removable = false, facet }: TagProps) => {
  const [selected, setSelected] = useState(false);

  if (facet) {
    return (
      <button
        onClick={() => setSelected(!selected)}
        className={clsx(
          "tag tag--outlined",
          selected && "tag--outlined-selected"
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <span
      className={clsx(
        "tag tag--small",
        removable ? "cursor-pointer" : "tag--large"
      )}
    >
      {label}
      {removable && <Icon />}
    </span>
  );
};

export default Tag;
