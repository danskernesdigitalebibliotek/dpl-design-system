import FooterAccordion from "./FooterAccordion";
import { footerContent } from "../../Blocks/footer/footer-content";

const FooterAccordions = () => {
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
