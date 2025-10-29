import React, { ReactNode } from "react";
import MediaContainer from "../../media-container/MediaContainer";

export type HeroInnerProps = {
  image?: ReactNode;
  placeholderText?: string;
};

const HeroVisual: React.FunctionComponent<HeroInnerProps> = ({
  image,
  placeholderText,
}) => {
  return (
    <div className="hero__visual hero-grid__visual">
      <div className="hero__visual-inner">
        <MediaContainer placeholderText={placeholderText} media={image} />
      </div>
    </div>
  );
};

export default HeroVisual;
