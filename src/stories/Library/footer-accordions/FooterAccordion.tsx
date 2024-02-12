import { FC, useState } from "react";
import { FooterColumnType } from "../footer-colums/FooterColumn";

type FooterAccordionProps = FooterColumnType & {
  open?: boolean;
};

const FooterAccordion: FC<FooterAccordionProps> = ({
  title,
  content,
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <h3 className="footer-accordion__header footer__title">
        <button
          className="footer-accordion__header-button"
          aria-expanded={isOpen}
          data-footer-accordion-trigger
          onClick={toggleAccordion}
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
        hidden={!isOpen}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer__content"
      />
    </>
  );
};

export default FooterAccordion;
