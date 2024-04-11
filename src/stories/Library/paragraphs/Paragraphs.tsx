import CardGrid from "../card-grid/CardGrid";
import { card, cardNoImage } from "../card-grid/card-grid-data";
import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import Paragraph from "../paragraph/Paragraph";
import { Recommendation } from "../recommendation/Recommendation";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <section className="paragraphs">
      <Paragraph modifier="rich-text">
        <RichTextEvent />
      </Paragraph>

      <Paragraph modifier="links">
        <LinkWithIcon href="/" linkText="External Link" linkType="external" />
      </Paragraph>

      <Paragraph modifier="links">
        <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
      </Paragraph>
    </section>
  );
};

export const ArticleParagraphs = () => {
  return (
    <section className="paragraphs">
      <Paragraph modifier="rich-text">
        <RichText />
      </Paragraph>

      <Paragraph modifier="video">
        <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />
      </Paragraph>

      <Paragraph modifier="links">
        <LinkWithIcon href="/" linkText="External Link" linkType="external" />
      </Paragraph>

      <Paragraph modifier="recommendation">
        <Recommendation
          title="Børnenes Naturhobbybog"
          description="Naturen er fyldt med alle mulige ting fx blade, blomster, sten osv., der kan bruges til at lave en forskellige kreative ting af. Her er inspiration at hente til små og store hobbyprojekter."
          href="#"
          recommendedMaterialProps={{
            author: "Pia Deges (2019)",
            description: "Børnenes Naturhobbybog",
            src: "images/book_cover_6.jpg",
            alt: "book cover",
            favoriteFill: false,
            materialUrl: "#",
          }}
        />
      </Paragraph>

      <Paragraph modifier="recommendation">
        <Recommendation
          positionImageRight
          title="Børnenes Naturhobbybog"
          description="Naturen er fyldt med alle mulige ting fx blade, blomster, sten osv., der kan bruges til at lave en forskellige kreative ting af. Her er inspiration at hente til små og store hobbyprojekter."
          href="#"
          recommendedMaterialProps={{
            author: "Pia Deges (2019)",
            description: "Børnenes Naturhobbybog",
            src: "images/book_cover_6.jpg",
            alt: "book cover",
            favoriteFill: false,
            materialUrl: "#",
          }}
        />
      </Paragraph>

      <Paragraph modifier="card_grid">
        <CardGrid items={[card, cardNoImage, card, card, card, cardNoImage]} />
      </Paragraph>
    </section>
  );
};
