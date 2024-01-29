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
  );
};

export default TagCategories;
