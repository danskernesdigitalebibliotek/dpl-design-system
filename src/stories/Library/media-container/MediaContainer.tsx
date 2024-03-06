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
    <div className={clsx(classes)}>
      {media ? (
        <div className="media-container__media"> {media} </div>
      ) : (
        <div className="media-container__placeholder-text">
          {placeholderText}
        </div>
      )}
    </div>
  );
};

export default MediaContainer;
