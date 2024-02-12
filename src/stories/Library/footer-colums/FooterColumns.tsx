import FooterColumn from "./FooterColumn";
import { footerContent } from "../../Blocks/footer/footer-content";

const FooterColumns = () => {
  return (
    <ul className="footer-columns">
      {footerContent.map(({ title, content }, i) => (
        <li className="footer-column">
          <FooterColumn title={title} content={content} />
        </li>
      ))}
    </ul>
  );
};

export default FooterColumns;
