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
  const [imageError, setImageError] = useState<boolean | null>(null);
  return (
    <div
      className={clsx(
        (!src || imageError) && `cover-size--${size}`,
        (!src || imageError) && `cover-aspect--${size}`,
        (!src || imageError) && tintClasses[tint || "default"]
      )}
    >
      {src && (
        <img
          onError={() => setImageError(true)}
          className={clsx("cover-img", `cover-size--${size}`, {
            "cover-img__animate": animate,
          })}
          src={src}
          alt={description || ""}
        />
      )}
    </div>
  );
};

export default CoverImage;
