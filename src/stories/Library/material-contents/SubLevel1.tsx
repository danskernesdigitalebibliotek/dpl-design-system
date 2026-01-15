import React from "react";
import EntryDetails from "./EntryDetails";
import SubLevel2 from "./SubLevel2";

import { ContentSublevel } from "./types";

interface SubLevel1Props {
  item: ContentSublevel;
}

const SubLevel1: React.FC<SubLevel1Props> = ({ item }) => {
  const hasSublevels = item.sublevel && item.sublevel.length > 0;

  return (
    <li className="material-content__item material-content__item--level-2">
      <div className="material-content__item-content">
        <div className="material-content__main-line">
          <span className="material-content__title">{item.title.display}</span>
          <EntryDetails playingTime={item.playingTime} />
        </div>
        {item.contributors && item.contributors.length > 0 && (
          <div className="material-content__secondary-line">
            <span className="material-content__contributors">
              ({item.contributors.join(", ")})
            </span>
          </div>
        )}
        {hasSublevels && (
          <ol className="material-content__list material-content__list--level-3">
            {item.sublevel?.map((sublevel2, idx) => (
              <SubLevel2 key={idx} item={sublevel2} />
            ))}
          </ol>
        )}
      </div>
    </li>
  );
};

export default SubLevel1;
