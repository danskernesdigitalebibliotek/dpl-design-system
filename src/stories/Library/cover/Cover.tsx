import clsx from "clsx";
import { FC, useState } from "react";
import CoverImage from "./CoverImage";
import { tintClasses } from "./helper";
import { CoverProps } from "./types";

const Cover: FC<CoverProps> = ({
  size,
  displaySize,
  animate,
  src,
  tint,
  coverUrl,
  alt,
  shadow,
  ariaLabel = "Link to the material",
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean | null>(null);

  const coverDisplaySize = displaySize || size;

  const classes = {
    wrapper: clsx(
      "cover",
      `cover--size-${coverDisplaySize}`,
      `cover--aspect-${coverDisplaySize}`,
      imageLoaded || tintClasses[tint || "default"]
    ),
  };

  if (coverUrl && alt) {
    // Images inside links must have an non-empty alt text to meet accessibility requirements.
    // Only render the cover as a link if we have both an url and a description.
    return (
      <a
        className={classes.wrapper}
        href={coverUrl}
        aria-label={ariaLabel}
        aria-labelledby="cover labelled by"
        title="cover title text"
      >
        <CoverImage
          setImageLoaded={() => setImageLoaded(true)}
          src={src}
          alt={alt}
          size={size}
          animate={animate}
          tint={tint}
          shadow={shadow}
        />
      </a>
    );
  }

  return (
    <div className={classes.wrapper}>
      <CoverImage
        setImageLoaded={() => setImageLoaded(true)}
        src={src}
        alt={alt}
        size={size}
        animate={animate}
        tint={tint}
        shadow={shadow}
      />
    </div>
  );
};

export default Cover;
