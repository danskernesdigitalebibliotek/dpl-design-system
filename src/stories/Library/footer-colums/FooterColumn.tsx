import { FC } from "react";

export type FooterColumnType = {
  title: string;
  content: string;
};

const FooterColumn: FC<FooterColumnType> = ({ title, content }) => {
  return (
    <>
      <h3 className="footer__title">{title}</h3>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
        className="footer__content"
      />
    </>
  );
};

export default FooterColumn;
