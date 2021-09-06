import React from "react";
import { InvalidProps } from "../../components/InvalidProps";
import "../../styles/css/base.css";

// Imported as components
import { ReactComponent as ArrowLargeLeft } from "../../icons/arrow-ui/icon-arrow-ui-large-left.svg";
import { ReactComponent as ArrowLargeRight } from "../../icons/arrow-ui/icon-arrow-ui-large-right.svg";
import { ReactComponent as ArrowSmallLeft } from "../../icons/arrow-ui/icon-arrow-ui-small-left.svg";
import { ReactComponent as ArrowSmallRight } from "../../icons/arrow-ui/icon-arrow-ui-small-right.svg";

// Import as static
import ArrowLargeLeftStatic from "../../icons/arrow-ui/icon-arrow-ui-large-left.svg";
import ArrowLargeRightStatic from "../../icons/arrow-ui/icon-arrow-ui-large-right.svg";
import ArrowSmallLeftStatic from "../../icons/arrow-ui/icon-arrow-ui-small-left.svg";
import ArrowSmallRightStatic from "../../icons/arrow-ui/icon-arrow-ui-small-right.svg";

export type IconArrowProps = {
  size: "large" | "small";
  direction: "right" | "left";
  hover: boolean;
};

export const IconArrow = (props: IconArrowProps) => {
  const { size, direction, hover } = props;

  const getArrow = () => {
    if (size === "large") {
      if (hover) {
        return direction === "right" ? ArrowLargeRight : ArrowLargeLeft;
      } else {
        return direction === "right"
          ? ArrowLargeRightStatic
          : ArrowLargeLeftStatic;
      }
    }

    if (size === "small") {
      if (hover) {
        return direction === "right" ? ArrowSmallRight : ArrowSmallLeft;
      } else {
        return direction === "right"
          ? ArrowSmallRightStatic
          : ArrowSmallLeftStatic;
      }
    }

    return InvalidProps;
  };

  const ArrowComp = getArrow();

  return (
    <div className="INTERNAL__container">
      {props.hover ? (
        <div className={`arrow-hover-${props.direction}-${props.size}`}>
          <p className="text-header-h1">Text example</p>
          <ArrowComp />
        </div>
      ) : (
        <img src={ArrowComp as string} />
      )}
    </div>
  );
};
