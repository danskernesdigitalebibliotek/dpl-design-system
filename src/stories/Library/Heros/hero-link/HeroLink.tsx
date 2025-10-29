import React from "react";
import clsx from "clsx";
import HeroInner from "../hero/HeroInner";
import { HeroProps } from "../hero/Hero";
import HeroVisual from "../hero/HeroVisual";

export type HeroLinkProps = {
  url: string;
} & HeroProps;

const HeroLink: React.FunctionComponent<HeroLinkProps> = ({
  url,
  image,
  placeholderText,
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
    <div className="border-bottom">
      <section className={classes}>
        <a
          href={url}
          className="hero__content hero-grid__content arrow arrow__hover--right-large"
        >
          <HeroInner
            contentType={contentType}
            date={date}
            title={title}
            description={description}
            descriptionItems={descriptionItems}
            arrow
          />
        </a>

        <HeroVisual image={image} placeholderText={placeholderText} />
      </section>
    </div>
  );
};

export default HeroLink;
