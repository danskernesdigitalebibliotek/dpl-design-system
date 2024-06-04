import { FC } from "react";
import FooterAccordion from "./FooterAccordion";
import { FooterColumnType } from "../footer-colums/FooterColumn";

export type FooterAccordionsType = {
  footerContent: FooterColumnType[];
};

const FooterAccordions: FC<FooterAccordionsType> = ({ footerContent }) => {
  // use the logic in initaccordion.js to initialize the accordion ind drupal
  return (
    <ul className="footer-accordions" data-footer-accordions>
      {footerContent.map(({ title, content }, i) => (
        <li className="footer-accordion" key={i}>
          <FooterAccordion title={title} content={content} open={i === 0} />
        </li>
      ))}
    </ul>
  );
};

export default FooterAccordions;
