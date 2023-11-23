import clsx from "clsx";
import { FC } from "react";
import RowButton from "./RowButton";

type RowButtonProps = {
  labels: string[];
  className?: string;
};

const RowButtons: FC<RowButtonProps> = ({ labels, className }) => (
  <div className={clsx("row-buttons", className)}>
    {labels.slice(0, 2).map((label) => (
      <RowButton label={label} />
    ))}
    {labels.length > 2 && <RowButton label="..." />}
  </div>
);

export default RowButtons;
