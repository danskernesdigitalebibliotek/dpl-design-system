import { FC, ReactNode } from "react";
import clsx from "clsx";
import MediaContainer from "../media-container/MediaContainer";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

type BannerType = {
  link: string;
  title: string;
  image?: ReactNode;
  description?: string;
};

const Banner: FC<BannerType> = ({ link, image, title, description }) => {
  return (
    <a href={link} className="banner">
      {image && (
        <div className="banner__media-wrapper">
          <MediaContainer media={image} />
        </div>
      )}
      <div
        className={clsx("banner__content-wrapper", {
          "banner__content-wrapper--no-image": !image,
        })}
      >
        <div
          className={clsx("banner__content arrow__hover--right-large", {
            "banner__content--no-image": !image,
          })}
        >
          {title && (
            <h2
              className="banner__title"
              // We need to be able to replicate our WYSIWYG field in Drupal that makes it possible to underline (<u>) words.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && <p className="banner__description">{description}</p>}
          <ArrowLargeRight />
        </div>
      </div>
    </a>
  );
};

export default Banner;
