import { FC } from "react";
import { Tag } from "../tag/Tag";

type EventHeaderProps = {
  title: string;
  date: string;
  image: string;
};

const EventHeader: FC<EventHeaderProps> = ({ title, date, image }) => {
  return (
    <header className="event-header">
      <section className="event-header__content">
        <div className="event-header__extra-padding">
          <Tag hasBackground className="event-header__tag">
            udstilling
          </Tag>
          <time className="event-header__date">{date}</time>
          <h1 className="event-header__title">{title}</h1>
        </div>
        <a
          href="/"
          className="btn-primary btn-filled btn-large event-header__button"
        >
          Køb billet
        </a>
      </section>
      <section className="event-header__visual">
        <img
          className="event-header__image"
          src={image}
          alt="Event description"
        />
        <div className="event-header__image-info">
          <span>Photo by Unsplash </span>
          <span>©2021</span>
        </div>
      </section>
    </header>
  );
};

export default EventHeader;
