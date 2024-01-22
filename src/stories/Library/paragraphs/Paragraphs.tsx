import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <section className="paragraphs">
      <div className="paragraphs__item paragraphs__item--rich-text">
        <RichTextEvent />
      </div>
      <div className="paragraphs__item paragraphs__item--links">
        <LinkWithIcon
          href="https://example.com"
          linkText="External Link"
          linkType="external"
        />
      </div>
      <div className="paragraphs__item paragraphs__item--links">
        <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
      </div>
    </section>
  );
};

export const ArticleParagraphs = () => {
  return (
    <section className="paragraphs">
      <div className="paragraphs__item paragraph--rich-text">
        <RichText />
      </div>
      <div className="paragraphs__item paragraph--video">
        <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />
      </div>
      <div className="paragraphs__item paragraphs__item--links">
        <LinkWithIcon
          href="https://example.com"
          linkText="External Link"
          linkType="external"
        />
      </div>
    </section>
  );
};
