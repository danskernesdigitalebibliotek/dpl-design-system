import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <section className="paragraphs">
      <div className="paragraph paragraph--rich-text">
        <RichTextEvent />
      </div>
      <div className="paragraph paragraph--links">
        <LinkWithIcon
          href="https://example.com"
          linkText="External Link"
          linkType="external"
        />
      </div>
      <div className="paragraph paragraph--links">
        <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
      </div>
    </section>
  );
};

export const ArticleParagraphs = () => {
  return (
    <section className="paragraphs">
      <div className="paragraph paragraph--rich-text">
        <RichText />
      </div>
      <div className="paragraph paragraph--video">
        <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />
      </div>
      <div className="paragraph paragraph--links">
        <LinkWithIcon
          href="https://example.com"
          linkText="External Link"
          linkType="external"
        />
      </div>
    </section>
  );
};
