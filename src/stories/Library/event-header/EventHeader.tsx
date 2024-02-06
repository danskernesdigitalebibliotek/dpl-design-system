import { FC } from "react";
import TagList from "../tag/tag-list/TagList";
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
        <TagList tags={["design & teknologi"]} />
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
