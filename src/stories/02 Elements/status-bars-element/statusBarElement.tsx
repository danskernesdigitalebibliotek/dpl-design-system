import React from "react";
import { StatusBar, StatusBarProps } from "../../01 Atoms/status-bar/statusBar";

export type StatusBarElementProps = {
  statusBars: StatusBarProps[];
  title: string;
};

export const StatusBarElement = (props: StatusBarElementProps) => {
  const { statusBars, title } = props;
  return (
    <div className="dpl-status-bar-element m-8">
      <h2 className="text-header-h2">{title}</h2>
      {statusBars.map(({ title, amount, fullAmount, outOf }) => (
        <StatusBar
          title={title}
          amount={amount}
          fullAmount={fullAmount}
          outOf={outOf}
        ></StatusBar>
      ))}
    </div>
  );
};
