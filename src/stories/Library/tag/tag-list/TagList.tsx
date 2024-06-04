import { FC, useEffect } from "react";
import Tag from "../Tag";

type TagListProps = {
  tags: string[];
};

const TagList: FC<TagListProps> = ({ tags }) => {
  useEffect(() => {
    require("../../../utils/show-more");
  }, []);

  if (!tags) {
    return null;
  }

  return (
    <>
      {tags.length > 1 && (
        <div data-show-more-list-wrapper className="tag-list">
          <ul
            data-show-more-list
            data-initial-visible-items="3"
            data-hide-list-button-after-expand="false"
            data-show-more-list-id="tag-list"
          >
            {tags.map((tag, index) => (
              <li data-show-more-item>
                <Tag key={index} hasBackground size="large">
                  {tag}
                </Tag>
              </li>
            ))}
          </ul>
          <button
            className="tag tag--fill cursor-pointer"
            aria-expanded="false"
            data-show-more-button
            data-show-more-text="..."
            data-show-less-text="-"
          >
            ...
          </button>
        </div>
      )}
      {tags.length === 1 && (
        <div className="tag-list">
          <Tag hasBackground size="large">
            {tags[0]}
          </Tag>
        </div>
      )}
    </>
  );
};

export default TagList;
