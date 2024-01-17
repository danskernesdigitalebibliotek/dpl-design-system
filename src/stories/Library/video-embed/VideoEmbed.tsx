import { FC } from "react";

type VideoEmbedProps = {
  src: string;
};

const VideoEmbed: FC<VideoEmbedProps> = ({ src }) => {
  return (
    <section className="video-embed-paragraph">
      <div className="video-embed">
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
