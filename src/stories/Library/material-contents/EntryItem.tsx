import React from "react";
import EntryDetails from "./EntryDetails";
import SubLevel1 from "./SubLevel1";

import { ContentEntry } from "./types";

interface EntryItemProps {
  entry: ContentEntry;
}

const EntryItem: React.FC<EntryItemProps> = ({ entry }) => {
  const hasSublevels = entry.sublevel && entry.sublevel.length > 0;

  return (
    <li className="material-content__item material-content__item--level-1">
      <div className="material-content__item-content">
        <div className="material-content__main-line">
          <span className="material-content__title">{entry.title.display}</span>
          <EntryDetails
            creators={entry.creators}
            playingTime={entry.playingTime}
          />
        </div>
        {entry.contributors && entry.contributors.length > 0 && (
          <div className="material-content__secondary-line">
            <span className="material-content__contributors">
              ({entry.contributors.join(", ")})
            </span>
          </div>
        )}
        {hasSublevels && (
          <ol className="material-content__list material-content__list--level-2">
            {entry.sublevel?.map((sublevel1, idx) => (
              <SubLevel1 key={idx} item={sublevel1} />
            ))}
          </ol>
        )}
      </div>
    </li>
  );
};

export default EntryItem;
