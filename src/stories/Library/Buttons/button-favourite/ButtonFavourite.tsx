import { IconFavourite } from "../../Icons/icon-favourite/IconFavourite";

interface ButtonFavouriteProps {
  fill?: boolean;
}

export const ButtonFavourite = ({ fill }: ButtonFavouriteProps) => {
  return (
    <button
      type="button"
      aria-label="Tilføj til favoritter"
      className={
        fill
          ? `button-favourite animate__animated animate__heartbeat`
          : `button-favourite`
      }
    >
      <IconFavourite fill={fill} />
    </button>
  );
};

export default ButtonFavourite;
