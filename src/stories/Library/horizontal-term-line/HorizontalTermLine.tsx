import { useState } from "react";
import ButtonExpand from "../Buttons/button/button-expand/ButtonExpand";
import Heading, { HeadingLevelType } from "../heading/Heading";

export interface HorizontalTermLineList {
  url: string;
  text: string;
}

export interface HorizontalTermLineProps {
  title: string;
  subTitle?: string;
  linkList: HorizontalTermLineList[];
  collapsible?: boolean;
  headingLevel?: HeadingLevelType;
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
  headingLevel = "h3",
}) => {
  const numberOfItemsToShow = collapsible ? 2 : linkList.length;
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore
    ? linkList
    : linkList.slice(0, numberOfItemsToShow);
  const showMoreButton = linkList.length > numberOfItemsToShow;

  return (
    <div className="text-small-caption horizontal-term-line">
      <Heading level={headingLevel} className="text-label-bold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </Heading>

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
