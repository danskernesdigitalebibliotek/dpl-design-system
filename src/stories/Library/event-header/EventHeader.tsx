import { FC } from "react";
import Tag from "../tag/Tag";
import ImageCredited from "../image-credited/ImageCredited";

type EventHeaderProps = {
  title: string;
  date: string;
  image: string;
};

const EventHeader: FC<EventHeaderProps> = ({ title, date, image }) => {
  return (
    <header className="event-header">
      <section className="hero-content">
        <Tag hasBackground size="large" className="event-tag">
          design & teknologi
        </Tag>
        <time className="event-header__date">{date}</time>
        <h1 className="event-header__title">{title}</h1>
        <a href="/" className="btn-primary btn-filled btn-large hero-cta">
          Køb billet
        </a>
      </section>
      <section className="hero-visual">
        <ImageCredited
          src={image}
          description="Photo by Unsplash"
          year="©2021"
        />
      </section>
    </header>
  );
};

export default EventHeader;
