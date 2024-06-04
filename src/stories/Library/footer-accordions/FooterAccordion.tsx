import { FC, useState } from "react";
import { clsx } from "clsx";
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
      <h2 className="footer-accordion__header footer__title">
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
      </h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className={clsx("footer__content", {
          "footer__content--hidden": !isOpen,
        })}
      />
    </>
  );
};

export default FooterAccordion;
