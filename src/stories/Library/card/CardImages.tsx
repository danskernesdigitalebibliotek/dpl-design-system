import { FC } from "react";

type ImageCreditedProps = {
  src: string;
  alternativeSrcs?: { name: string; src: string }[];
  alt?: string;
};

const ImageCredited: FC<ImageCreditedProps> = ({
  src,
  alternativeSrcs,
  alt = "",
}) => {
  // Card images are displayed in different aspect ratios, based on context.
  // This is handled by object-fit centering, but generally speaking, we want
  // different cropped images to be served.
  // We get around this, by allowing to pass along alternative SRCs, that are
  // presented as containers, set to display none and using background images.
  // By doing it this way, and letting CSS decide when the display is allowed,
  // the browser is smart enough only to load the image when necessary.
  return (
    <figure className="image-credited">
      {src ? (
        <div className="image-credited__image">
          {alternativeSrcs &&
            alternativeSrcs.map((alternativeSrc) => (
              <div
                className="card__override-images"
                style={{
                  display: "none",
                  backgroundImage: `url(${alternativeSrc.src})`,
                }}
                data-card-style={alternativeSrc.name}
              />
            ))}

          <img src={src} alt={alt} loading="lazy" />
        </div>
      ) : (
        <div className="image-credited__no-image" />
      )}
    </figure>
  );
};

export default ImageCredited;
