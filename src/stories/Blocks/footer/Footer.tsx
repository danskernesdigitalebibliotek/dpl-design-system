import Pagefold from "../../Library/pagefold/Pagefold";
import FooterAccordions from "../../Library/footer-accordions/FooterAccordions";
import FooterColumns from "../../Library/footer-colums/FooterColumns";
import FooterInfo from "../../Library/footer-info/FooterInfo";
import FooterSeparator from "../../Library/footer-separator/FooterSeparator";
import FooterWidgets from "../../Library/footer-widgets/FooterWidgets";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="hide-visually">Globale links</h2>
      {/* Footer mobile */}
      <Pagefold
        className="footer__mobile"
        isInheriting
        isAContainer
        size="small"
      >
        <FooterAccordions />
        <FooterWidgets />
        <FooterSeparator />
        <FooterInfo />
      </Pagefold>

      {/* Footer tablet/desktop */}
      <Pagefold
        className="footer__desktop"
        isInheriting
        isAContainer
        size="medium"
      >
        <FooterColumns />
        <FooterWidgets />
        <FooterSeparator />
        <FooterInfo />
      </Pagefold>
    </footer>
  );
};

export default Footer;
