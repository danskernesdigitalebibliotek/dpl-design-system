import CoverImage from "./CoverImage";
import { CoverProps } from "./types";

const Cover = ({
  size,
  animate,
  src,
  tint,
  coverUrl,
  description,
}: CoverProps) => {
  if (coverUrl && description) {
    // Images inside links must have an non-empty alt text to meet accessibility requirements.
    // Only render the cover as a link if we have both an url and a description.
    return (
      <a href={coverUrl}>
        <CoverImage
          src={src}
          description={description}
          size={size}
          animate={animate}
          tint={tint}
        />
      </a>
    );
  }

  return <CoverImage src={src} size={size} animate={animate} tint={tint} />;
};

export default Cover;
