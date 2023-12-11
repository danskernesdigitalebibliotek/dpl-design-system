import React from "react";

export type MediaProps = {
  imageUrl?: string;
  altText?: string;
  byline?: string;
};

const Media: React.FunctionComponent<MediaProps> = ({
  imageUrl,
  byline,
  altText,
}) => {
  return (
    <figure className="media">
      <img src={imageUrl} alt={altText} />
      {byline ?? <figcaption>{byline}</figcaption>}
    </figure>
  );
};

export default Media;
