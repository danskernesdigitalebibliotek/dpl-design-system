import React from "react";
import Media from "../media/Media";

export type MediasProps = {
  mediaItems?: Array<typeof Media>;
};

const Medias: React.FunctionComponent<MediasProps> = ({ mediaItems }) => {
  return (
    <div class="medias">
      {mediaItems.map((media) => (
        <Media />
      ))}
    </div>
  );
};

export default Medias;
