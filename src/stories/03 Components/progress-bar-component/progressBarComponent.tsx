import React from "react";
import {
  ProgressBarContainer,
  ProgressBarContainerProps,
} from "../../02 Elements/progress-bar-container/progressBarContainer";

export type LinkProps = {
  link: string;
  text: string;
};

export type ProgressBarComponentProps = {
  progressBarsData: ProgressBarContainerProps[];
  title: string;
  link: LinkProps;
  bread: string;
};

export const ProgressBarComponent = (props: ProgressBarComponentProps) => {
  const { progressBarsData, title: progressBarsTitle, link, bread } = props;
  const { link: url, text: linkText } = link;

  return (
    <div className="dpl-progress-bar-component">
      <h1 className="text-header-h1 m-8">{progressBarsTitle}</h1>
      <div className="m-8 text-body-small-regular">
        {`${bread} `}
        <a href={url} className="text-links">
          {linkText}
        </a>
      </div>
      <div className="dpl-progress-bar-component__progress-bar-containers">
        {progressBarsData.map(({ progressBars, title }) => (
          <ProgressBarContainer
            title={title}
            progressBars={progressBars}
          ></ProgressBarContainer>
        ))}
      </div>
    </div>
  );
};
