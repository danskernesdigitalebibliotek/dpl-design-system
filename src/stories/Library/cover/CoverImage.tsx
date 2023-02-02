import clsx from "clsx";
import { FC } from "react";
import { CoverProps } from "./types";

type CoverState = {
  setImageLoaded?: () => void;
};

const CoverImage: FC<CoverProps & CoverState> = ({
  src,
  description,
  animate,
  setImageLoaded,
  shadow,
}) => (
  <img
    onLoad={setImageLoaded}
    className={clsx(
      "cover__img",
      {
        "cover__img--animate": animate,
      },
      { "cover__img--shadow": shadow }
    )}
    src={src}
    alt={description || ""}
  />
);
export default CoverImage;
