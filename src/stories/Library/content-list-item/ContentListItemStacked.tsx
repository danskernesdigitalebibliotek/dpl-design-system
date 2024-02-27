import { FC } from "react";
import { ReactComponent as ArrowSmallRight } from "../Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg";

interface ContentListItemStackedProps {
  href: string;
  time: string;
  date: string;
}

const ContentListItemStacked: FC<ContentListItemStackedProps> = ({
  href = "#",
  time,
  date,
}) => {
  return (
    <a
      href={href}
      className="content-list-item-stacked arrow__hover--right-small"
    >
      <time className="content-list-item-stacked__content">
        <span className="content-list-item-stacked__date">{date}</span>
        <span className="content-list-item-stacked__time">{time}</span>
      </time>
      <ArrowSmallRight />
    </a>
  );
};

export default ContentListItemStacked;
