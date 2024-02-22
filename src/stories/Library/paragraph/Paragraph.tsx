import { FC } from "react";

type ParagraphProps = {
  modifier: string;
  children: React.ReactNode;
};

const Paragraph: FC<ParagraphProps> = ({ modifier, children }) => {
  return (
    <div className={`paragraphs__item paragraphs__item--${modifier}`}>
      {children}
    </div>
  );
};

export default Paragraph;
