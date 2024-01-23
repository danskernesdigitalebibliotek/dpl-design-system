import { FC, ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  title?: string;
  linkText?: string;
  items: ReactNode[];
};

const CardGrid: FC<CardProps> = ({ items, title, linkText }) => {
  return (
    <div className={clsx("card-grid", `card-grid--count-${items.length}`)}>
      <div className="card-grid__header">
        {title ? <h2 className="card-grid__title">{title}</h2> : ""}
        {linkText ? (
          <a className="card-grid__link" href="#">
            {linkText}
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="card-grid__items-wrapper">
        <div className="card-grid__items">
          {items.map((item) => {
            return <div className={clsx("card-grid__item")}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
