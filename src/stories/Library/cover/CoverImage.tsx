import clsx from "clsx";
import { FC } from "react";
import { CoverProps } from "./types";

type CoverState = {
  setImageLoaded?: () => void;
};

const CoverImage: FC<CoverProps & CoverState> = ({
  src,
  alt,
  animate,
  setImageLoaded,
  shadow,
}) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = "none";
  };

  return (
    <img
      onError={handleImgError}
      onLoad={setImageLoaded}
      className={clsx(
        "cover__img",
        {
          "cover__img--animate": animate,
        },
        {
          "cover__img--shadow-small": shadow === "small",
          "cover__img--shadow-medium": shadow === "medium",
        },
      )}
      src={src}
      alt={alt || ""}
    />
  );
};
export default CoverImage;
