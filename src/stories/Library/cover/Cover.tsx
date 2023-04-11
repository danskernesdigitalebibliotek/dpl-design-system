import clsx from "clsx";
import { FC, useState } from "react";
import CoverImage from "./CoverImage";
import { tintClasses } from "./helper";
import { CoverProps } from "./types";

const Cover: FC<CoverProps> = ({
  size,
  animate,
  src,
  tint,
  coverUrl,
  description,
  shadow,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean | null>(null);

  const classes = {
    wrapper: clsx(
      "cover",
      `cover--size-${size}`,
      `cover--aspect-${size}`,
      imageLoaded || tintClasses[tint || "default"]
    ),
  };

  if (coverUrl && description) {
    // Images inside links must have an non-empty alt text to meet accessibility requirements.
    // Only render the cover as a link if we have both an url and a description.
    return (
      <a
        className={classes.wrapper}
        href={coverUrl}
        aria-label="cover aria label"
        aria-labelledby="cover labelled by"
        title="cover title text"
      >
        <CoverImage
          setImageLoaded={() => setImageLoaded(true)}
          src={src}
          description={description}
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
        description={description}
        size={size}
        animate={animate}
        tint={tint}
        shadow={shadow}
      />
    </div>
  );
};

export default Cover;
