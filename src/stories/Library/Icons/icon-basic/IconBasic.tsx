import React from "react";

const svgIcons = [
  {
    title: "Profile",
    fileName: "icon-profile.svg",
  },
  {
    title: "Favorite",
    fileName: "icon-heart.svg",
  },
  {
    title: "Bookmark",
    fileName: "icon-bookmark.svg",
  },
  {
    title: "Search",
    fileName: "icon-search.svg",
  },
  {
    title: "Bell",
    fileName: "icon-bell.svg",
  },
  {
    title: "External link",
    fileName: "icon-external-link.svg",
  },
];

export const IconBasic = () => {
  return (
    <div className="internal-container-grid">
      {svgIcons.map((i) => (
        <div className="internal-center">
          <img src={`icons/basic/${i.fileName}`} alt={i.title} />
          <span className="text-body-medium-regular">{i.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IconBasic;
