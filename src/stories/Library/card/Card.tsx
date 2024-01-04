import { FC, ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  variant: string;
  typeTag?: string;
  dateTag?: string;
  title?: string;
  image?: ReactNode;
  placeholderText?: string;
};

const Card: FC<CardProps> = ({
  variant,
  image,
  placeholderText,
  title,
  typeTag,
  dateTag,
}) => {
  const classes = clsx("card", {
    "card--has-no-image": !image,
    "card--has-image": image,
  });

  return (
    <article className={classes} data-variant={variant}>
      <a href="https://google.com">
        <figure className="card__media">
          {image || (
            <div className="card__placeholder-text">{placeholderText}</div>
          )}
        </figure>
        <div className="card__tags">
          {typeTag ? (
            <span className="card__tag card__tag--type">{typeTag}</span>
          ) : (
            ""
          )}
          {dateTag ? <span className="card__tag">{dateTag}</span> : ""}
        </div>
        <h1 className="card__title">{title}</h1>
      </a>
    </article>
  );
};

export default Card;
