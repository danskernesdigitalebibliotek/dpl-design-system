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
      <img src={src} className="image-credited__img" alt={alt} />
      <div className="image-credited__info">
        <span>{description}</span>
        <span>{year}</span>
      </div>
    </figure>
  );
};

export default ImageCredited;
