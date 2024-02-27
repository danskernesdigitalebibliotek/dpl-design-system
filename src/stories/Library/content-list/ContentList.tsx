import clsx from "clsx";
import {
  ContentListItem,
  ContentListItemProps,
} from "../content-list-item/ContentListItem";
import ContentListItemStacked from "../content-list-item/ContentListItemStacked";

type ContentListProps = {
  items: ContentListItemProps[];
};

const ContentList: React.FC<ContentListProps> = ({ items }) => {
  return (
    <ul className="content-list">
      {items.map((item, index) => {
        // Check if current event should be stacked with the previous one
        const isStacked =
          items[index].eventSeriesId === items[index - 1]?.eventSeriesId ??
          false;

        return (
          <li
            key={index}
            className={clsx("content-list__item", {
              "content-list__item--stacked": isStacked,
            })}
          >
            {isStacked ? (
              <ContentListItemStacked {...item} />
            ) : (
              <ContentListItem {...item} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ContentList;
