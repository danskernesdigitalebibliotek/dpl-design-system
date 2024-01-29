import React from "react";
import ImageCredited from "../image-credited/ImageCredited";
import TagCategories from "../tag/tag-categories/TagCategories";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

export type HeroProps = {
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
    <section className="hero">
      <a href="/" className="hero-content arrow arrow__hover--right-large">
        <TagCategories tags={["Arrangement"]} />
        <div className="hero-date">
          <span className="hero-date__text">Arrangement</span>
          <div>|</div>
          <time className="hero-date__date">{date}</time>
        </div>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <div>
          <ArrowLargeRight />
        </div>
      </a>
      <div className="hero-visual">
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
