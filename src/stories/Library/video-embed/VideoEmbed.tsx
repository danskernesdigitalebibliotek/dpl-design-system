import { FC } from "react";

type VideoEmbedProps = {
  src: string;
};

const VideoEmbed: FC<VideoEmbedProps> = ({ src }) => {
  return (
    <div className="video-embed">
      <iframe
        src={src}
        title="VideoEmbed"
        width="auto"
        height="auto"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
