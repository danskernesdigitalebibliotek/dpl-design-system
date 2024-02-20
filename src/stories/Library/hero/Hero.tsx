import React from "react";
import ImageCredited from "../image-credited/ImageCredited";
import Tag from "../tag/Tag";
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
        <Tag hasBackground size="large" className="hero-tag">
          Arrangement
        </Tag>
        <div className="hero__details">
          {contentType && (
            <>
              <span className="hero__details__type">{contentType}</span>|
            </>
          )}
          <time className="hero__details__date">{date}</time>
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
