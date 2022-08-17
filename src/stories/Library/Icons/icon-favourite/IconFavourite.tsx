import { ReactComponent as SvgIcon } from "./icon-favourite.svg";

export type IconFavouriteProps = {
  fill?: boolean;
};

export const IconFavourite = ({ fill }: IconFavouriteProps) => {
  return (
    <SvgIcon
      className={
        fill ? "icon-favourite icon-favourite--filled" : "icon-favourite"
      }
    />
  );
};
