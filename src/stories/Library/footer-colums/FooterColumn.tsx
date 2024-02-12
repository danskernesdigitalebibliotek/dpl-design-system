import { FC } from "react";

export type FooterColumnType = {
  title: string;
  content: string;
};

const FooterColumn: FC<FooterColumnType> = ({ title, content }) => {
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
