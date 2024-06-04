import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

interface ContentListItemStackedProps {
  title: string;
  href: string;
  time: string;
  date: string;
}

const ContentListItemStacked: FC<ContentListItemStackedProps> = ({
  title,
  href = "#",
  time,
  date,
}) => {
  return (
    <a
      href={href}
      className="content-list-item-stacked arrow__hover--right-small"
    >
      <h3 className="hide-visually">{title}</h3>
      <time className="content-list-item-stacked__content">
        <span className="content-list-item-stacked__date">{date}</span>
        <span className="content-list-item-stacked__time">{time}</span>
      </time>
      <ArrowSmallRight />
    </a>
  );
};

export default ContentListItemStacked;
