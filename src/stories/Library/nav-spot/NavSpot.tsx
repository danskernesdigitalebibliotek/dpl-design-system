import { FC, ReactNode } from "react";
import { ReactComponent as Arrow } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

type NavSpotProps = {
  variant?: string;
  title: string;
  subtitle?: string;
  media?: ReactNode;
};

const NavSpot: FC<NavSpotProps> = ({ variant, title, subtitle, media }) => {
  return (
    <article
      className="nav-spot arrow__hover--right-large"
      data-variant={variant}
    >
      <a href="#" className="nav-spot__content">
        {media ? <figure className="nav-spot__media">{media}</figure> : ""}
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
