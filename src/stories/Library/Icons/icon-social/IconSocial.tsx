import React from "react";

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
        <div className="internal-center">
          <img src={`icons/social/${i.fileName}`} alt={i.title} />
          <span className="text-body-medium-regular">{i.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IconSocial;
