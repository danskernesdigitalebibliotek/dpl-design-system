import React from "react";
import { InvalidProps } from "../../../components/InvalidProps";
import "../../../styles/css/base.css";

export const IconWatch = () => {
  return (
    <div className="internal-container-grid">
      <div>
        <img src={`icons/basic/icon-watch-static.svg`} />
        <span>Clock</span>
      </div>
    </div>
  );
};
