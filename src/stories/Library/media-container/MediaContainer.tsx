import clsx from "clsx";
import { FC, ReactNode } from "react";

type ImageCreditedProps = {
  media?: ReactNode;
  placeholderText?: string;
};

const MediaContainer: FC<ImageCreditedProps> = ({
  media,
  placeholderText = "",
}) => {
  const classes = clsx("media-container", {
    "media-container--placeholder": !media,
  });

  return (
    <figure className={clsx(classes)}>
      {media ?? (
        <div className="media-container__placeholder-text">
          {placeholderText}
        </div>
      )}
    </figure>
  );
};

export default MediaContainer;
