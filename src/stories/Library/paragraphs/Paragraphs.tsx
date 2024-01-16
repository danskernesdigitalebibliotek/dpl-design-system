import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <section className="paragraphs">
      <RichTextEvent />
      <LinkWithIcon
        href="https://example.com"
        linkText="External Link"
        linkType="external"
      />
      <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
    </section>
  );
};

export const ArticleParagraphs = () => {
  return (
    <section className="paragraphs">
      <RichText />
      <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />
      <LinkWithIcon
        href="https://example.com"
        linkText="External Link"
        linkType="external"
      />
    </section>
  );
};
