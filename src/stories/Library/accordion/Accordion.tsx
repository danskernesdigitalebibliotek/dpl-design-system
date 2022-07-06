import React, { useEffect } from "react";

type AccordionRow = {
  header: string;
  content: Array<{
    title: string;
    href: string;
  }>;
};
type AccordionProps = {
  list: AccordionRow[];
};

const Accordion: React.FC<AccordionProps> = ({ list }) => {
  useEffect(() => {
    /* eslint-disable-next-line global-require */
    require("./initaccordion");
  }, []);
  return (
    <ul className="accordion" onClick={(e) => window.eventAccordion(e)}>
      {list.map((row) => (
        <li key={row.header} className="accordion__row">
          <h3 className="accordion__header text-header-h4">
            <button
              className="accordion__button px-48"
              aria-expanded="false"
              data-accordion-trigger
            >
              {row.header}
              <img
                className="accordion__button-arrow"
                src="icons/basic/icon-triangle.svg"
                alt=""
              />
            </button>
          </h3>
          <div hidden className="accordion__body pt-16 pb-32">
            {row.content.map((i) => (
              <a key={i.title} href={i.href}>
                {i.title}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

declare global {
  interface Window {
    eventAccordion: (
      event: React.MouseEvent<HTMLUListElement, MouseEvent>
    ) => void;
  }
}

export default Accordion;
