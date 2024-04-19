import clsx from "clsx";
import { FC } from "react";

export interface SubmitButtonProps {
  buttonText: string;
  classNames?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ buttonText, classNames }) => {
  const classes = clsx(
    [
      "btn-primary",
      "btn-filled",
      "btn-small",
      "arrow__hover--right-small",
      "dpl-button",
    ],
    classNames
  );

  return <input type="submit" value={buttonText} className={classes} />;
};

export default SubmitButton;
