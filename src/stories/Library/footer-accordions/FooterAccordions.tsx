import { useEffect } from "react";
import FooterAccordion from "./FooterAccordion";
import { footerContent } from "../../Blocks/footer/footer-content";

const FooterAccordions = () => {
  useEffect(() => {
    /* eslint-disable-next-line global-require */
    require("./initaccordion");
  }, []);
  return (
    <ul className="footer-accordions" onClick={(e) => window.eventAccordion(e)}>
      {footerContent.map(({ title, content }, i) => (
        <FooterAccordion title={title} content={content} open={i === 0} />
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

export default FooterAccordions;
