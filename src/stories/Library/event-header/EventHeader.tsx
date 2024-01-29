import { FC } from "react";
import TagCategories from "../tag/tag-categories/TagCategories";
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
        <TagCategories tags={["design & teknologi"]} />
        <time className="event-header-date">{date}</time>
        <h1 className="event-header-title">{title}</h1>
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
