import { FC } from "react";

export type FooterColumnProps = {
  title: string;
  content: string;
};

const FooterColumn: FC<FooterColumnProps> = ({ title, content }) => {
  return (
    <li className="footer__column">
      <h3 className="footer-title">{title}</h3>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer-content"
      />
    </li>
  );
};

export default FooterColumn;
