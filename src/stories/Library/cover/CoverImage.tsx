import clsx from "clsx";
import { FC, useState } from "react";
import { tintClasses } from "./helper";
import { CoverProps } from "./types";

const CoverImage: FC<CoverProps> = ({
  src,
  size,
  description,
  tint,
  animate,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean | null>(null);
  return (
    <div
      className={clsx(
        "cover",
        `cover--size-${size}`,
        `cover--aspect-${size}`,
        imageLoaded || tintClasses[tint || "default"]
      )}
    >
      {src && (
        <img
          onLoad={() => setImageLoaded(true)}
          className={clsx("cover__img", {
            "cover__img--animate": animate,
          })}
          src={src}
          alt={description || ""}
        />
      )}
    </div>
  );
};

export default CoverImage;
