import clsx from "clsx";
import { FC, ReactNode } from "react";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

type BannerType = {
  link: string;
  title: string;
  imageSrc?: ReactNode;
  description?: string;
};

const Banner: FC<BannerType> = ({ link, imageSrc, title, description }) => {
  const backgroundImageStyle = imageSrc
    ? { backgroundImage: `url(${imageSrc})` }
    : {};
  return (
    <a
      href={link}
      className={clsx(`banner arrow__hover--right-large`, {
        "banner--has-image": imageSrc,
      })}
      style={backgroundImageStyle}
    >
      <div className="banner__content-wrapper">
        <div
          className={clsx("banner__content", {
            "banner__content--has-image": imageSrc,
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
