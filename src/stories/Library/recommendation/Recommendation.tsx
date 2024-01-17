import React from "react";
import clsx from "clsx";
import {
  RecommendedMaterial,
  RecommendedMaterialProps,
} from "../recommended-material/RecommendedMaterial";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

export type RecommendationProps = {
  title: string;
  description: string;
  href: string;
  recommendedMaterialProps: RecommendedMaterialProps;
  positionImageRight?: boolean;
};

export const Recommendation: React.FC<RecommendationProps> = ({
  title,
  description,
  href,
  recommendedMaterialProps,
  positionImageRight = false,
}) => {
  return (
    <a
      href={href}
      className={clsx(
        "recommendation",
        positionImageRight && "recommendation--reversed"
      )}
    >
      <div className="recommendation__material">
        <RecommendedMaterial {...recommendedMaterialProps} />
      </div>
      <div className="recommendation__texts arrow__hover--right-small">
        <h3 className="recommendation__title">{title}</h3>
        <p className="recommendation__description">{description}</p>
        <ArrowSmallRight />
      </div>
    </a>
  );
};
