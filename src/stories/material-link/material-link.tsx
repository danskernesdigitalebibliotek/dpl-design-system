import React from "react";

export interface MaterialLinkList {
  url: string;
  text: string;
}

export interface MaterialLinkProps {
  title: string;
  subTitle?: string;
  linkList: MaterialLinkList[];
}

const MaterialLink: React.FC<MaterialLinkProps> = ({
  title,
  subTitle,
  linkList,
}) => {
  return (
    <div className="text-small-caption material-link">
      <span className="text-label-semibold">{title} </span>
      {subTitle && <span>{subTitle}</span>}
      {linkList.map((link, index) => (
        <>
          {" "}
          <a href="/" className="link-tag" key={index}>
            {link.text}
          </a>
        </>
      ))}
    </div>
  );
};

export default MaterialLink;
