import { FC } from "react";
import { FooterColumnProps } from "../footer-colums/FooterColumn";

type FooterAccordionProps = FooterColumnProps & {
  open?: boolean;
};

const FooterAccordion: FC<FooterAccordionProps> = ({
  title,
  content,
  open = false,
}) => {
  return (
    <>
      <h3 className="footer-accordion__header footer-title">
        <button
          className="footer-accordion__header-button"
          aria-expanded={open}
          data-accordion-trigger
        >
          {title}
          <img
            className="footer-accordion__header-button__arrow"
            src="icons/basic/icon-triangle.svg"
            alt=""
          />
        </button>
      </h3>
      <div
        hidden={!open}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer-content"
      />
    </>
  );
};

export default FooterAccordion;
