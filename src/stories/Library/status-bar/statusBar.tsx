import React from "react";

export type StatusBarProps = {
  amount: number;
  fullAmount: number;
  title: string;
  outOf: string;
};

export const StatusBar = (props: StatusBarProps) => {
  const { amount, fullAmount, title, outOf } = props;
  const width = (amount / fullAmount) * 100;

  return (
    <div className="dpl-status-bar text-small-caption color-secondary-gray">
      <div className="dpl-status-bar__header">
        <div className="text-label">{title}</div>
        <div className="text-label">
          {amount} {outOf} {fullAmount}
        </div>
      </div>
      <div className="dpl-status-bar__status-bar bg-global-secondary">
        <div
          className="bg-identity-primary"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};
