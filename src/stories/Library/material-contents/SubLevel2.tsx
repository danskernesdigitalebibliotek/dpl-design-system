import React from "react";
import EntryDetails from "./EntryDetails";

import { ContentSublevel } from "./types";

interface SubLevel2Props {
  item: ContentSublevel;
}

const SubLevel2: React.FC<SubLevel2Props> = ({ item }) => (
  <li className="material-content__item material-content__item--level-3">
    <div className="material-content__item-content">
      <span className="material-content__title">{item.title.display}</span>
      <EntryDetails
        contributors={item.contributors ?? undefined}
        playingTime={item.playingTime}
      />
    </div>
  </li>
);

export default SubLevel2;
