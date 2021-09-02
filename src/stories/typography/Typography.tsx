import React from "react";
import "../../styles/css/base.css";

export const Typography = () => {
  return (
    <div style={{ display: "grid", gridGap: "40px" }}>
      {typographyClasses.map((typography) => (
        <div key={typography.className} className={typography.className}>
          {typography.title}
        </div>
      ))}
    </div>
  );
};

const typographyClasses = [
  {
    className: "text__header-h1",
    title: "Title/Header 1",
  },
  {
    className: "text__header-h2",
    title: "Header 2",
  },
  {
    className: "text__header-h3",
    title: "Header 3",
  },
  {
    className: "text__header-h4",
    title: "Header 4",
  },
  {
    className: "text__subtitle",
    title: "Subtitle",
  },
  {
    className: "text__accent",
    title: "ACCENT",
  },
  {
    className: "text__body-large",
    title: "Body - L",
  },
  {
    className: "text__body-medium-regular",
    title: "Body - M",
  },
  {
    className: "text__body-medium-medium",
    title: "Body  - M / Medium",
  },
  {
    className: "text__button",
    title: "BUTTON TEXT",
  },
  {
    className: "text__links",
    title: "Links",
  },
  {
    className: "text__tags",
    title: "TAGS",
  },
  {
    className: "text__small-caption",
    title: "Small Text / Caption",
  },
];
