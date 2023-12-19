import { LinkWithIcon } from "../link-with-icon/LinkWithIcon";
import { RichTextEvent } from "../rich-text/RichText";

const EventParagraphs = () => {
  return (
    <section className="event-paragraphs">
      <RichTextEvent />
      <LinkWithIcon
        href="https://example.com"
        linkText="External Link"
        linkType="external"
      />
    </section>
  );
};

export default EventParagraphs;
