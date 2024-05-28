import { FC } from "react";

export type FooterColumnType = {
  title: string;
  content: string;
};

const FooterColumn: FC<FooterColumnType> = ({ title, content }) => {
  return (
    <>
      <h2 className="footer__title">{title}</h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer__content"
      />
    </>
  );
};

export default FooterColumn;
