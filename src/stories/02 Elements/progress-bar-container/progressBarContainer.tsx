import React from "react";
import {
  ProgressBar,
  ProgressBarProps,
} from "../../01 Atoms/progress-bar/progressBar";

export type ProgressBarContainerProps = {
  progressBars: ProgressBarProps[];
  title: string;
};

export const ProgressBarContainer = (props: ProgressBarContainerProps) => {
  const { progressBars, title } = props;
  return (
    <div className="dpl-progress-bar-element m-8">
      <h2 className="text-header-h2">{title}</h2>
      {progressBars.map(({ title, amount, fullAmount, outOf }) => (
        <ProgressBar
          title={title}
          amount={amount}
          fullAmount={fullAmount}
          outOf={outOf}
        ></ProgressBar>
      ))}
    </div>
  );
};
