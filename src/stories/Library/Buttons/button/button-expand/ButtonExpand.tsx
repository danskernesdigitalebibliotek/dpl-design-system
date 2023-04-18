import clsx from "clsx";
import { FC } from "react";

export type ButtonExpandProps = {
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
};

const ButtonExpand: FC<ButtonExpandProps> = ({ showMore, setShowMore }) => {
  return (
    <button
      className="button-expand"
      type="button"
      onClick={() => setShowMore(!showMore)}
      aria-label="Expand More"
    >
      <img
        className={clsx("button-expand__image", {
          "button-expand__image--expanded": showMore,
        })}
        src="icons/collection/ExpandMore.svg"
        alt=""
      />
    </button>
  );
};

export default ButtonExpand;
