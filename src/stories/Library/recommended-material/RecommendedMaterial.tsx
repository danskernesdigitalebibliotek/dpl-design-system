import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";

export type RecommendedMaterialProps = {
  author: string;
  publicationYear: string;
  description: string;
  src: string;
  alt: string;
  favoriteFill?: boolean;
};

export const RecommendedMaterial: React.FC<RecommendedMaterialProps> = ({
  author,
  publicationYear,
  description,
  src,
  alt,
  favoriteFill = true,
}) => {
  return (
    <div className="recommended-material">
      <div className="recommended-material__icon">
        <ButtonFavourite fill={favoriteFill} />
      </div>
      <img className="recommended-material__image" src={src} alt={alt} />
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
