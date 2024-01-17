import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import Cover from "../cover/Cover";

export type RecommendedMaterialProps = {
  author: string;
  publicationYear: string;
  description: string;
  src: string;
  alt: string;
  favoriteFill?: boolean;
  coverUrl?: string;
};

export const RecommendedMaterial: React.FC<RecommendedMaterialProps> = ({
  author,
  publicationYear,
  description,
  src,
  alt,
  favoriteFill = true,
  coverUrl,
}) => {
  return (
    <div className="recommended-material">
      <div className="recommended-material__icon">
        <ButtonFavourite fill={favoriteFill} />
      </div>
      <Cover
        src={src}
        size="large"
        animate={false}
        tint="80"
        shadow="medium"
        coverUrl={coverUrl}
        alt={alt}
      />
      <div className="recommended-material__texts">
        <p className="recommended-material__author">
          {author}{" "}
          <span className="recommended-material__publication-year">
            ({publicationYear})
          </span>
        </p>
        <p className="recommended-material__description">{description}</p>
      </div>
    </div>
  );
};
