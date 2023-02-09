import clsx from "clsx";
import { useState } from "react";

export interface HorizontalTermLineList {
  url: string;
  text: string;
}

export interface HorizontalTermLineProps {
  title: string;
  subTitle?: string;
  linkList: HorizontalTermLineList[];
}

export function generateId(index: number | string) {
  const randomId = Math.random().toString(36);
  return randomId.concat(index.toString());
}

const HorizontalTermLine: React.FC<HorizontalTermLineProps> = ({
  title,
  subTitle,
  linkList,
}) => {
  const numberOfItemsToShow = 2;
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore
    ? linkList
    : linkList.slice(0, numberOfItemsToShow);
  const showMoreButton = linkList.length > numberOfItemsToShow;

  return (
    <div className="text-small-caption horizontal-term-line">
      <p className="text-label-bold">
        {`${title}`}{" "}
        {subTitle && <span className="text-small-caption">{subTitle} </span>}
      </p>

      {itemsToShow.map((link, index) => (
        <span key={generateId(index)}>
          <a href="/" className="link-tag" key={index}>
            {link.text}
          </a>
        </span>
      ))}

      {showMoreButton && (
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          aria-label="Expand More"
        >
          <img
            className={clsx("horizontal-term-line__expand", {
              "horizontal-term-line__expand--expanded": showMore,
            })}
            src="icons/collection/ExpandMore.svg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};

export default HorizontalTermLine;
