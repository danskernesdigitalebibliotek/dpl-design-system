import React from "react";
import ImageCredited from "../image-credited/ImageCredited";
import { Tag } from "../tag/Tag";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

type HeroProps = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const Hero: React.FunctionComponent<HeroProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <section className="hero ">
      <a href="/" className="hero__content arrow arrow__hover--right-large">
        <div className="hero__tags">
          <Tag hasBackground>LITTERATUR</Tag>
        </div>
        <div className="hero-date">
          <span className="hero-date__text">Arrangement</span>
          <div>|</div>
          <time className="hero-date__date">{date}</time>
        </div>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        <div className="hero__cta">
          <ArrowLargeRight />
        </div>
      </a>
      <div className="hero__visual">
        <ImageCredited
          src={image}
          description="Photo by Unsplash"
          year="©2021"
        />
      </div>
    </section>
  );
};

export default Hero;
