import { ButtonFavourite } from "../Buttons/button-favourite/ButtonFavourite";
import Cover from "../cover/Cover";

export type RecommendedMaterialProps = {
  author: string;
  description: string;
  src: string;
  alt: string;
  favoriteFill?: boolean;
  materialUrl?: string;
  partOfGrid?: boolean;
};

export const RecommendedMaterial: React.FC<RecommendedMaterialProps> = ({
  author,
  description,
  src,
  alt,
  favoriteFill = true,
  materialUrl,
  partOfGrid = false,
}) => {
  return (
    <div
      className={`recommended-material ${
        partOfGrid && "recommended-material--in-grid "
      }`}
    >
      <div className="recommended-material__icon">
        <ButtonFavourite fill={favoriteFill} />
      </div>
      <Cover
        src={src}
        size="large"
        animate={false}
        tint="80"
        shadow="medium"
        coverUrl={materialUrl}
        alt={alt}
      />
      <div className="recommended-material__texts">
        <a href={materialUrl} className="recommended-material__description">
          {description}
        </a>
        <a href={materialUrl} className="recommended-material__author">
          {author}
        </a>
      </div>
    </div>
  );
};
