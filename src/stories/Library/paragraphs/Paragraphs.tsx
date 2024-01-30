import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import { RichText, RichTextEvent } from "../rich-text/RichText";
import VideoEmbed from "../video-embed/VideoEmbed";

export const EventParagraphs = () => {
  return (
    <>
      <RichTextEvent />
      <LinkWithIcon
        href="https://example.com"
        linkText="External Link"
        linkType="external"
      />
      <LinkWithIcon href="/" linkText="internal Link" linkType="internal" />
    </>
  );
};

export const ArticleParagraphs = () => {
  return (
    <>
      <RichText />

      <VideoEmbed src="https://www.youtube.com/embed/CmzKQ3PSrow" />

      <LinkWithIcon
        href="https://example.com"
        linkText="External Link"
        linkType="external"
      />
    </>
  );
};
