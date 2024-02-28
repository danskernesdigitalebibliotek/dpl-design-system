import React from "react";
import ImageCredited from "../../image-credited/ImageCredited";

export type HeroInnerProps = {
  image?: string;
};

const HeroVisual: React.FunctionComponent<HeroInnerProps> = ({ image }) => {
  return (
    <div className="hero__visual">
      <div className="hero__visual-inner">
        {image && (
          <ImageCredited
            src={image}
            description="Photo by Unsplash"
            year="©2021"
          />
        )}
      </div>
    </div>
  );
};

export default HeroVisual;
