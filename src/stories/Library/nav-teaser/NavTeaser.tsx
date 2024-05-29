import { FC } from "react";
import { ReactComponent as Arrow } from "../Arrows/icon-arrow-ui/icon-arrow-ui-nav.svg";

type NavTeaserProps = {
  title: string;
  subtitle?: string;
};

const NavTeaser: FC<NavTeaserProps> = ({ title, subtitle }) => {
  return (
    <article className="nav-teaser">
      <a href="#">
        <h3 className="nav-teaser__title">{title}</h3>

        {subtitle ? <p className="nav-teaser__subtitle">{subtitle}</p> : ""}

        <Arrow />
      </a>
    </article>
  );
};

export default NavTeaser;
