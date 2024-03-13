import { FC, ReactNode, useEffect } from "react";
import clsx from "clsx";

type CardProps = {
  title?: string;
  showSubtitles?: boolean;
  items: ReactNode[];
};

const NavGrid: FC<CardProps> = ({ items, title, showSubtitles }) => {
  useEffect(() => {
    require("./init-nav-grid");
  }, []);

  const hasMany = items.length > 6;

  return (
    <div
      className={clsx(
        "nav-grid",
        showSubtitles ? "nav-grid--expanded" : "nav-grid--simple",
        hasMany && "nav-grid--has-many",
        hasMany && "nav-grid--folded"
      )}
    >
      <div className="nav-grid__header">
        {title && <h2 className="nav-grid__title">{title}</h2>}
      </div>
      <ul className="nav-grid__items">
        {items.map((item) => (
          <li className="nav-grid__item">{item}</li>
        ))}
      </ul>

      {hasMany && (
        <button className="nav-grid__controller btn-primary btn-outline btn-medium">
          Vis alle
        </button>
      )}
    </div>
  );
};

export default NavGrid;
