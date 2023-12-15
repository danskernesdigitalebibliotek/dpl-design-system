import clsx from "clsx";
import { FC } from "react";

type ImageCreditedProps = {
  src: string;
  alt?: string;
  description: string;
  year: string;
  className?: string;
};

const ImageCredited: FC<ImageCreditedProps> = ({
  src,
  alt = "",
  description,
  year,
  className,
}) => {
  return (
    <figure className={clsx("image-credited", className)}>
      {src ? (
        <>
          <img src={src} className="image-credited__img" alt={alt} />
          <figcaption className="image-credited__info">
            <span>{description}</span>
            <span>{year}</span>
          </figcaption>
        </>
      ) : (
        <div className="image-credited__no-image" />
      )}
    </figure>
  );
};

export default ImageCredited;
