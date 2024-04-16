import React, { useEffect } from "react";
import {
  ContentListItem,
  ContentListItemProps,
} from "../content-list-item/ContentListItem";

interface PromoteEventsListProps {
  title: string;
  events: ContentListItemProps[];
  buttonText: string;
  buttonShowLessText?: string;
}

const PromoteEventsList: React.FC<PromoteEventsListProps> = ({
  title,
  events,
  buttonText,
  buttonShowLessText,
}) => {
  useEffect(() => {
    require("../../utils/show-more");
  }, []);

  return (
    <div className="filtered-event-list" data-show-more-list-wrapper>
      <h2 className="filtered-event-list__heading">{title}</h2>
      <ul
        className="filtered-event-list__list"
        data-show-more-list
        data-initial-visible-items="2"
        data-hide-list-button-after-expand="false"
        data-show-more-list-id="filtered-event-list"
      >
        {events.map((event) => (
          <li className="filtered-event-list__list-item" data-show-more-item>
            <ContentListItem {...event} />
          </li>
        ))}
      </ul>
      <button
        className="filtered-event-list__button btn-primary btn-outline btn-medium"
        type="button"
        data-show-more-button
        data-show-more-text={buttonText}
        data-show-less-text={buttonShowLessText}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default PromoteEventsList;
