import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import Paragraph from "../paragraph/Paragraph";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <section className="paragraphs">
      <Paragraph modyfier="rich-text">
        <RichTextEvent />
      </Paragraph>

      <Paragraph modyfier="links">
        <LinkWithIcon href="/" linkText="External Link" linkType="external" />
      </Paragraph>

      <Paragraph modyfier="links">
        <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
      </Paragraph>
    </section>
  );
};

export const ArticleParagraphs = () => {
  return (
    <section className="paragraphs">
      <Paragraph modyfier="rich-text">
        <RichText />
      </Paragraph>

      <Paragraph modyfier="video">
        <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />
      </Paragraph>

      <Paragraph modyfier="links">
        <LinkWithIcon href="/" linkText="External Link" linkType="external" />
      </Paragraph>
    </section>
  );
};
