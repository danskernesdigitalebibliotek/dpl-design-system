import clsx from "clsx";
import { FC } from "react";

type RowButtonProps = {
  labels: string[];
  className?: string;
};

const RowButton: FC<RowButtonProps> = ({ labels, className }) => (
  <div className={clsx("row-buttons", className)}>
    {labels.slice(0, 2).map((label) => (
      <button
        className="row-button text-tags row-button__text capitalize-all"
        type="button"
      >
        {label}
      </button>
    ))}
    {labels.length > 2 && (
      <button
        className="row-button text-tags row-button__text capitalize-all"
        type="button"
      >
        ...
      </button>
    )}
  </div>
);

export default RowButton;
