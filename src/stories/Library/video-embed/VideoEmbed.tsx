import { FC } from "react";

type VideoEmbedProps = {
  src: string;
};

const VideoEmbed: FC<VideoEmbedProps> = ({ src }) => {
  return (
    <section className="video-embed">
      <div className="video-embed__wrapper">
        <iframe
          src={src}
          title="VideoEmbed"
          width="auto"
          height="auto"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoEmbed;
