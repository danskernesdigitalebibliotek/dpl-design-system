import React from "react";
import {
  StatusBarElement,
  StatusBarElementProps,
} from "../status-bars-element/statusBarElement";

export type LinkProps = {
  link: string;
  text: string;
};

export type StatusBarComponentProps = {
  statusBarsData: StatusBarElementProps[];
  title: string;
  link: LinkProps;
  bread: string;
};

export const StatusBarComponent = (props: StatusBarComponentProps) => {
  const { statusBarsData, title: statusBarsTitle, link, bread } = props;
  const { link: url, text: linkText } = link;
  console.log(statusBarsData);
  return (
    <div className="dpl-status-bar-component">
      <h1 className="text-header-h1 m-8">{statusBarsTitle}</h1>
      <div className="m-8 text-body-small-regular">
        {`${bread} `}
        <a href={url} className="text-links">
          {linkText}
        </a>
      </div>
      <div className="dpl-status-bar-component__status-bar-containers">
        {statusBarsData.map(({ statusBars, title }) => (
          <StatusBarElement
            title={title}
            statusBars={statusBars}
          ></StatusBarElement>
        ))}
      </div>
    </div>
  );
};
