import React from "react";
import { InvalidProps } from "../../components/InvalidProps";
import "../../styles/css/base.css";

// Import as static
import ArrowAccent from "../../icons/arrow-accent/icon-arrow-accent.svg";

export const IconAccent = () => {
  return (
    <div className="INTERNAL__container">
      <img src={ArrowAccent as string} />
    </div>
  );
};
