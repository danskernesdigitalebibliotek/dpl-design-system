import { FC, useEffect } from "react";
import { Tag } from "./Tag";

type HeroTagsProps = {
  tags: string[];
};

const HeroTags: FC<HeroTagsProps> = ({ tags }) => {
  useEffect(() => {
    require("../../utils/show-more");
  }, []);

  if (!tags) {
    return null;
  }

  return (
    <ul data-show-more-list className="hero-tags">
      {tags.map((tag, index) => (
        <li data-show-more-item>
          <Tag key={index} hasBackground>
            {tag}
          </Tag>
        </li>
      ))}
      <button
        className="tag tag--fill tag--small cursor-pointer"
        aria-expanded="false"
        data-show-more-button
      >
        ...
      </button>
    </ul>
  );
};

export default HeroTags;
