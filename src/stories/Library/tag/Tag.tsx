import React from "react";

type TagProps = {
  label: string;
  removable: boolean;
};

export const Tag = (props: TagProps) => {
  const { label, removable } = props;
  const Icon = () =>
    removable ? (
      <img
        className="tag-icon"
        src="icons/basic/icon-cross.svg"
        alt="close icon"
      />
    ) : null;

  return (
    <span
      className={`tag-primary ${
        removable ? "tag-removable tag-small" : "tag-large"
      }`}
    >
      {label}
      <Icon />
    </span>
  );
};

export default Tag;
