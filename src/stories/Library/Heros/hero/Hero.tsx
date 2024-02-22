import React from "react";
import clsx from "clsx";
import ImageCredited from "../../image-credited/ImageCredited";
import HeroInner, { HeroInnerProps } from "./HeroInner";

export type HeroProps = {
  image?: string;
} & HeroInnerProps;

const HeroLink: React.FunctionComponent<HeroProps> = ({
  image,
  contentType,
  date,
  title,
  description,
  descriptionItems,
  cta,
  tag,
}) => {
  const classes = clsx("hero", {
    "hero--has-no-media": !image,
  });

  return (
    <section className={classes}>
      <div className="hero__content">
        <HeroInner
          contentType={contentType}
          date={date}
          title={title}
          description={description}
          descriptionItems={descriptionItems}
          cta={cta}
          tag={tag}
        />
      </div>

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
