import { FC } from "react";

export type FooterColumnProps = {
  title: string;
  content: string;
};

const FooterColumn: FC<FooterColumnProps> = ({ title, content }) => {
  return (
    <>
      <h3 className="footer-title">{title}</h3>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer-content"
      />
    </>
  );
};

export default FooterColumn;
