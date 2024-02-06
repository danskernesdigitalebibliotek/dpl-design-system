import { FC, useEffect } from "react";
import { Tag } from "../Tag";

type TagCategoriesProps = {
  tags: string[];
};

const TagCategories: FC<TagCategoriesProps> = ({ tags }) => {
  useEffect(() => {
    require("../../../utils/show-more");
  }, []);

  if (!tags) {
    return null;
  }

  return (
    <>
      {tags.length > 1 && (
        <div data-show-more-list className="tag-categories">
          <ul>
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
          >
            ...
          </button>
        </div>
      )}
      {tags.length === 1 && (
        <div className="tag-categories">
          <Tag hasBackground size="large">
            {tags[0]}
          </Tag>
        </div>
      )}
    </>
  );
};

export default TagCategories;
