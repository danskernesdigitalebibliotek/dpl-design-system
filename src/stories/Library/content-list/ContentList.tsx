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
        if (item.isStacked) {
          return (
            <li
              key={index}
              className="content-list__item content-list__item--stacked"
            >
              <ContentListItemStacked {...item} />
            </li>
          );
        }

        return (
          <li key={index} className="content-list__item">
            <ContentListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContentList;
