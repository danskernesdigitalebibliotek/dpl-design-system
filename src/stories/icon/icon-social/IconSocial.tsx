import React from "react";
import { InvalidProps } from "../../../components/InvalidProps";
import "../../../styles/css/base.css";

const svgIcons = [
  {
    title: "Facebook",
    fileName: "icon-social-facebook.svg",
  },
  {
    title: "Instagram",
    fileName: "icon-social-instagram.svg",
  },
  {
    title: "Spotify",
    fileName: "icon-social-spotify.svg",
  },
  {
    title: "Youtube",
    fileName: "icon-social-youtube.svg",
  },
];

export const IconSocial = () => {
  return (
    <div className="internal-container-grid">
      {svgIcons.map((i) => (
        <div>
          <img src={`icons/social/${i.fileName}`} />
          <span>{i.title}</span>
        </div>
      ))}
    </div>
  );
};
