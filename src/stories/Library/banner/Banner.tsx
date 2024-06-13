import { FC, ReactNode } from "react";
import clsx from "clsx";
import MediaContainer from "../media-container/MediaContainer";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

type BannerType = {
  title: string;
  image?: ReactNode;
  description?: string;
};

const Banner: FC<BannerType> = ({ image, title, description }) => {
  return (
    <a href="#" className="banner">
      {image && (
        <div className="banner-visual">
          <MediaContainer media={image} />
        </div>
      )}
      <div className="banner__spacing">
        <div
          className={clsx("banner-content arrow__hover--right-large", {
            "banner-content--no-image": !image,
          })}
        >
          <h2
            className="banner-content__title"
            // We need to be able to replicate our WYSIWYG field in Drupal that makes it possible to underline (<u>) words.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {description && (
            <p className="banner-content__description">{description}</p>
          )}
          <ArrowLargeRight />
        </div>
      </div>
    </a>
  );
};

export default Banner;
