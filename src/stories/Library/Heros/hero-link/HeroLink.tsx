import React from "react";
import clsx from "clsx";
import ImageCredited from "../../image-credited/ImageCredited";
import { ReactComponent as ArrowLargeRight } from "../../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";
import HeroInner from "../hero/HeroInner";
import { HeroProps } from "../hero/Hero";

export type HeroLinkProps = {
  url: string;
} & HeroProps;

const HeroLink: React.FunctionComponent<HeroLinkProps> = ({
  url,
  image,
  contentType,
  date,
  title,
  description,
  descriptionItems,
}) => {
  const classes = clsx("hero", {
    "hero--has-no-media": !image,
  });

  return (
    <section className={classes}>
      <a href={url} className="hero__content arrow arrow__hover--right-large">
        <HeroInner
          contentType={contentType}
          date={date}
          title={title}
          description={description}
          descriptionItems={descriptionItems}
        />
        <div>
          <ArrowLargeRight />
        </div>
      </a>

      <div className="hero__visual">
        {image ? (
          <ImageCredited
            src={image}
            description="Photo by Unsplash"
            year="©2021"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default HeroLink;
