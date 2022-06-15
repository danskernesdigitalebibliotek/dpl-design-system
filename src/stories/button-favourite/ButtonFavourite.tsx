import { IconFavourite } from "../icon/icon-favourite/IconFavourite";

interface ButtonFavouriteProps {
  fill?: boolean;
}

export const ButtonFavourite = ({ fill }: ButtonFavouriteProps) => {
  return (
    <button
      type="button"
      aria-label="Add to favourites"
      className="button-favourite"
    >
      <IconFavourite fill={fill} />
    </button>
  );
};
