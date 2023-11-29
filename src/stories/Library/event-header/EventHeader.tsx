import { FC } from "react";
import { Tag } from "../tag/Tag";
import { Button } from "../Buttons/button/Button";

type EventHeaderProps = {
  title: string;
  date: string;
};

const EventHeader: FC<EventHeaderProps> = ({ title, date }) => {
  return (
    <header className="event-header">
      <section className="event-header__content">
        <div className="event-header__extra-padding">
          <Tag hasBackground className="event-header__tag">
            UDSTILLING
          </Tag>
          <time className="event-header__date">{date}</time>
          <h1 className="event-header__title">{title}</h1>
        </div>
        <Button
          classNames="event-header__button"
          label="Køb billet"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="large"
          variant="filled"
        />
      </section>
      <section className="event-header__visual">
        <img
          className="event-header__image"
          src="/images/event_image.jpg"
          alt=""
        />
        <div className="event-header__image-info">
          <span>Photo by Smith on Unsplash </span>
          <span>©2021</span>
        </div>
      </section>
    </header>
  );
};

export default EventHeader;
