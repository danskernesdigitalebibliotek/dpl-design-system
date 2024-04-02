import { FC, ReactNode } from "react";
import { ReactComponent as Arrow } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";
import MediaContainer from "../media-container/MediaContainer";

type NavSpotProps = {
  variant?: string;
  title: string;
  subtitle?: string;
  media?: ReactNode;
  placeholderText?: string;
};

const NavSpot: FC<NavSpotProps> = ({
  variant,
  title,
  subtitle,
  media,
  placeholderText,
}) => {
  return (
    <article
      className="nav-spot arrow__hover--right-large"
      data-variant={variant}
    >
      <a href="#" className="nav-spot__content">
        <div className="nav-spot__media">
          <MediaContainer placeholderText={placeholderText} media={media} />
        </div>

        <div className="nav-spot__text">
          <h1 className="nav-spot__title">{title}</h1>

          {subtitle ? <p className="nav-spot__subtitle">{subtitle}</p> : ""}

          <Arrow />
        </div>
      </a>
    </article>
  );
};

export default NavSpot;
