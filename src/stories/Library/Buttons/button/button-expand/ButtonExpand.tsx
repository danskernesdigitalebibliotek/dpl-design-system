import clsx from "clsx";
import { FC } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../../../../public/icons/collection/ExpandMore.svg";

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
      <ExpandMoreIcon
        className={clsx("button-expand__image", {
          "button-expand__image--expanded": showMore,
        })}
      />
    </button>
  );
};

export default ButtonExpand;
