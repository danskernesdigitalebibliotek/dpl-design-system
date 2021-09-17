import React from "react";
import { InvalidProps } from "../../../components/InvalidProps";
import "../../../styles/css/base.css";

const svgIcons = [
  {
    title: "Profil",
    fileName: "icon-profile.svg",
  },
  {
    title: "Farvorit",
    fileName: "icon-heart.svg",
  },
  {
    title: "Bogmærke",
    fileName: "icon-bookmark.svg",
  },
  {
    title: "Søg",
    fileName: "icon-search.svg",
  },
  {
    title: "Klokke",
    fileName: "icon-bell.svg",
  },
  {
    title: "Eksternt link",
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
