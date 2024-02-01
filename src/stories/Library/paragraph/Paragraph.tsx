import { FC } from "react";

type ParagraphProps = {
  modyfier: string;
  children: React.ReactNode;
};

const Paragraph: FC<ParagraphProps> = ({ modyfier, children }) => {
  return (
    <div className={`paragraphs__item paragraphs__item--${modyfier}`}>
      {children}
    </div>
  );
};

export default Paragraph;
