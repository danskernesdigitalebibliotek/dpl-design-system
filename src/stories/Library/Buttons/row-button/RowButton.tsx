import { FC } from "react";

type RowButtonProps = {
  label: string;
};

const RowButton: FC<RowButtonProps> = ({ label }) => (
  <button
    className="row-button text-tags row-button__text capitalize-all"
    type="button"
  >
    {label}
  </button>
);

export default RowButton;
