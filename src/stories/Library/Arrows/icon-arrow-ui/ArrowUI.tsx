import React from "react";
import { InvalidProps } from "../../../../components/InvalidProps";

// Imported as components
import { ReactComponent as ArrowLargeLeft } from "./icon-arrow-ui-large-left.svg";
import { ReactComponent as ArrowLargeRight } from "./icon-arrow-ui-large-right.svg";
import { ReactComponent as ArrowSmallLeft } from "./icon-arrow-ui-small-left.svg";
import { ReactComponent as ArrowSmallRight } from "./icon-arrow-ui-small-right.svg";

// Import as static
const ArrowLargeLeftStatic = "icon-arrow-ui-large-left.svg";
const ArrowLargeRightStatic = "icon-arrow-ui-large-right.svg";
const ArrowSmallLeftStatic = "icon-arrow-ui-small-left.svg";
const ArrowSmallRightStatic = "icon-arrow-ui-small-right.svg";

/**
 * Icons imported as components will be processed by webpack. This will embed
 * the svg code inline in the final html, and is necessary to be able to animate on hover.
 * If we dont animate the icon, the static import is more elegant.
 */

export type IconArrowProps = {
  size: "large" | "small";
  direction: "right" | "left";
  hover: boolean;
  children?: React.ReactNode;
};

export const IconArrow: React.FC<IconArrowProps> = ({
  size,
  direction,
  hover,
  children,
}) => {
  const isRight = direction === "right";

  const getStaticArrow = (): string => {
    if (size === "large") {
      return isRight ? ArrowLargeRightStatic : ArrowLargeLeftStatic;
    }

    if (size === "small") {
      return isRight ? ArrowSmallRightStatic : ArrowSmallLeftStatic;
    }

    return "";
  };

  const getDynamicArrow = () => {
    if (size === "large") {
      return isRight ? ArrowLargeRight : ArrowLargeLeft;
    }

    if (size === "small") {
      return isRight ? ArrowSmallRight : ArrowSmallLeft;
    }

    return InvalidProps;
  };

  const ArrowComp = getDynamicArrow();

  return hover ? (
    <div className={`arrow arrow__hover--${direction}-${size}`}>
      {children}
      <ArrowComp />
    </div>
  ) : (
    <img src={getStaticArrow()} />
  );
};
