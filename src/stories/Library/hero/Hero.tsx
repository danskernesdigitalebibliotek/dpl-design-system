import React from "react";
import ImageCredited from "../image-credited/ImageCredited";
import TagCategories from "../tag/tag-categories/TagCategories";
import { ReactComponent as ArrowLargeRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

export type HeroProps = {
  image: string;
  contentType?: string;
  date: string;
  title: string;
  description: string;
};

const Hero: React.FunctionComponent<HeroProps> = ({
  image,
  contentType,
  date,
  title,
  description,
}) => {
  return (
    <section className="hero">
      <a href="/" className="hero-content arrow arrow__hover--right-large">
        <TagCategories tags={["Arrangement"]} />
        <div className="hero__date">
          {contentType && (
            <>
              <span className="hero__date__text">{contentType}</span>|
            </>
          )}
          <time className="hero__date__date">{date}</time>
        </div>
        <h1 className="hero-title">{title}</h1>
        <div className="hero-description">
          <p>{description}</p>
        </div>
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
