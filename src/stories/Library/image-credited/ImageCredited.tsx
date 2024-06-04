import clsx from "clsx";
import { FC } from "react";

type ImageCreditedProps = {
  src: string;
  alt?: string;
  description?: string;
  year?: string;
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
          <div className="image-credited__image">
            <img src={src} alt={alt} />
          </div>
          {(description || year) && (
            <figcaption className="image-credited__info">
              <span>{description}</span>
              <span>{year}</span>
            </figcaption>
          )}
        </>
      ) : (
        <div className="image-credited__no-image" />
      )}
    </figure>
  );
};

export default ImageCredited;
