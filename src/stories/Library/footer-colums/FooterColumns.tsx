import { FC } from "react";
import FooterColumn, { FooterColumnType } from "./FooterColumn";

export type FooterColumnsType = {
  footerContent: FooterColumnType[];
};

const FooterColumns: FC<FooterColumnsType> = ({ footerContent }) => {
  return (
    <ul className="footer-columns">
      {footerContent.map(({ title, content }, i) => (
        <li className="footer-column" key={i}>
          <FooterColumn title={title} content={content} />
        </li>
      ))}
    </ul>
  );
};

export default FooterColumns;
