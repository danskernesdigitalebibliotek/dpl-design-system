import { FC } from "react";

export interface BoxedTextProps {
  text: string;
}

export const BoxedText: FC<BoxedTextProps> = ({ text }) => {
  return <div className="boxed-text text-tags noselect">{text}</div>;
};

export default BoxedText;
