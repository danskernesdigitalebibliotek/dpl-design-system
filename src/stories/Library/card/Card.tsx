import { FC, ReactNode } from "react";
import clsx from "clsx";
import MediaContainer from "../media-container/MediaContainer";

type CardProps = {
  variant?: string;
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
    "card--has-no-media": !image,
    "card--has-media": !!image,
  });

  return (
    <article className={classes} data-variant={variant}>
      <a href="https://google.com">
        <div className="card__media">
          <MediaContainer placeholderText={placeholderText} media={image} />
        </div>
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
