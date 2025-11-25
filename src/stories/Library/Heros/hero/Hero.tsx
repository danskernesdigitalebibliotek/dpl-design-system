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
  price,
}) => {
  const classes = clsx("hero hero-grid", {
    "hero--has-no-media": !image,
  });

  return (
    <section className="border-bottom">
      <div className={classes}>
        <div className="hero__content hero-grid__content">
          <HeroInner
            contentType={contentType}
            date={date}
            title={title}
            description={description}
            descriptionItems={descriptionItems}
            cta={cta}
            tag={tag}
            price={price}
          />
        </div>

        <HeroVisual image={image} placeholderText={placeholderText} />
      </div>
    </section>
  );
};

export default HeroLink;
