import React from "react";
import { CardListItem } from "../../Library/card-list-item/CardListItem";
import { CardListItemSkeleton } from "../../Library/card-list-item/CardListItemSkeleton";
import ResultPager from "../../Library/card-list-page/ResultPager";
import data from "../../Library/card-list-page/SearchResultPageData";

export interface FavouritesListProps {
  skeletonVersion?: boolean;
  materialsCount: number;
}

const FavouritesList: React.FC<FavouritesListProps> = ({
  skeletonVersion = false,
  materialsCount,
}) => {
  const materialsCountLine = materialsCount > 0 && (
    <h2 className="content-list-page__subheading">
      {materialsCount} materials
    </h2>
  );

  const SkeletonList = () => (
    <ul className="content-list">
      {[...Array(5)].slice(0, materialsCount).map((_, i) => (
        <li className="content-list__item" key={i}>
          <CardListItemSkeleton />
        </li>
      ))}
    </ul>
  );

  const FavouritesListContent = () => (
    <ul className="content-list">
      {data.searchResult.slice(0, materialsCount).map((item, i) => (
        <li className="content-list__item" key={i}>
          <CardListItem {...item} heartFill tintIndex={i} />
        </li>
      ))}
    </ul>
  );

  const EmptyList = () => (
    <div className="dpl-list-empty mt-24">Your favorites list is empty</div>
  );

  let content;
  if (skeletonVersion) {
    content = <SkeletonList />;
  } else if (materialsCount > 0) {
    content = <FavouritesListContent />;
  } else {
    content = <EmptyList />;
  }

  return (
    <div className="content-list-page">
      <h1 className="content-list-page__heading">Favourites</h1>
      {materialsCountLine}
      {content}
      {!skeletonVersion && (
        <ResultPager
          currentResults={materialsCount}
          totalResults={materialsCount}
          classNames="result-pager--margin-bottom"
        />
      )}
    </div>
  );
};

export default FavouritesList;
