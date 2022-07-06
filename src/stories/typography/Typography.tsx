import React from "react";

const typographyClasses = [
  {
    className: "text-header-h1",
    title: "Title/Header 1",
  },
  {
    className: "text-header-h2",
    title: "Header 2",
  },
  {
    className: "text-header-h3",
    title: "Header 3",
  },
  {
    className: "text-header-h4",
    title: "Header 4",
  },
  {
    className: "text-subtitle",
    title: "Subtitle",
  },
  {
    className: "text-accent",
    title: "ACCENT",
  },
  {
    className: "text-body-large",
    title: "Body - L",
  },
  {
    className: "text-body-medium-regular",
    title: "Body - M",
  },
  {
    className: "text-body-medium-medium",
    title: "Body  - M / Medium",
  },
  {
    className: "text-button",
    title: "BUTTON TEXT",
  },
  {
    className: "text-links",
    title: "Links",
  },
  {
    className: "text-tags",
    title: "TAGS",
  },
  {
    className: "text-small-caption",
    title: "Small Text / Caption",
  },
  {
    className: "text-label",
    title: "Desktop / Label",
  },
  {
    className: "text-label text-label-normal",
    title: "Desktop / Label normal",
  },
  {
    className: "text-label text-label-semibold",
    title: "Desktop / Label semibold",
  },
];

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

export default Typography;
