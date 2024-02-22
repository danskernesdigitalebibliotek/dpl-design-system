import { FC, ReactNode } from "react";
import clsx from "clsx";
import { ReactComponent as Arrow } from "../Arrows/icon-arrow-ui/icon-arrow-ui-large-right.svg";

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
  const classes = clsx("nav-spot", "arrow__hover--right-large", {
    "nav-spot--has-no-media": !media,
    "nav-spot--has-media": media,
  });

  return (
    <article className={classes} data-variant={variant}>
      <a href="#" className="nav-spot__content">
        <figure className="nav-spot__media">
          {media || (
            <div className="nav-spot__placeholder-text">{placeholderText}</div>
          )}
        </figure>

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
