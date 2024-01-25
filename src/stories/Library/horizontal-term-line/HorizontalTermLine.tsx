import { useState } from "react";
import ButtonExpand from "../Buttons/button/button-expand/ButtonExpand";

export interface HorizontalTermLineList {
  url: string;
  text: string;
}

export interface HorizontalTermLineProps {
  title: string;
  subTitle?: string;
  linkList: HorizontalTermLineList[];
  collapsible?: boolean;
}

export function generateId(index: number | string) {
  const randomId = Math.random().toString(36);
  return randomId.concat(index.toString());
}

const HorizontalTermLine: React.FC<HorizontalTermLineProps> = ({
  title,
  subTitle,
  linkList,
  collapsible = true,
}) => {
  const numberOfItemsToShow = collapsible ? 2 : linkList.length;
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore
    ? linkList
    : linkList.slice(0, numberOfItemsToShow);
  const showMoreButton = linkList.length > numberOfItemsToShow;

  return (
    <div className="text-small-caption horizontal-term-line">
      <h3 className="text-label-bold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </h3>

      {itemsToShow.map((link, index) => (
        <span key={generateId(index)}>
          <a href="/" className="link-tag" key={index}>
            {link.text}
          </a>
        </span>
      ))}

      {collapsible && showMoreButton && (
        <ButtonExpand showMore={showMore} setShowMore={setShowMore} />
      )}
    </div>
  );
};

export default HorizontalTermLine;
