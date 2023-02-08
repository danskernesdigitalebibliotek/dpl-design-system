import clsx from "clsx";
import { FC, useState } from "react";
import CoverImage from "./CoverImage";
import { tintClasses } from "./helper";

export type CoverProps = {
  src: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  tint?: "20" | "40" | "80" | "100" | "120";
  coverUrl?: string;
  description?: string;
  shadow?: boolean;
};

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
      <a className={classes.wrapper} href={coverUrl}>
        {src && (
          <CoverImage
            setImageLoaded={() => setImageLoaded(true)}
            src={src}
            description={description}
            animate={animate}
            shadow={shadow}
          />
        )}
      </a>
    );
  }

  return (
    <div className={classes.wrapper}>
      {src && (
        <CoverImage
          setImageLoaded={() => setImageLoaded(true)}
          src={src}
          description={description}
          animate={animate}
          shadow={shadow}
        />
      )}
    </div>
  );
};

export default Cover;
