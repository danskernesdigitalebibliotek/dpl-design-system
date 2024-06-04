import React, { ReactNode } from "react";
import clsx from "clsx";
import HeroInner, { HeroInnerProps } from "./HeroInner";
import HeroVisual from "./HeroVisual";

export type HeroProps = {
  image?: ReactNode;
  placeholderText?: string;
} & HeroInnerProps;

const HeroLink: React.FunctionComponent<HeroProps> = ({
  image,
  placeholderText,
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

      <HeroVisual image={image} placeholderText={placeholderText} />
    </section>
  );
};

export default HeroLink;
