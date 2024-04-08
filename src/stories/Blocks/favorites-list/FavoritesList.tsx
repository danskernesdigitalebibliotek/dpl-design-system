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
  const pageTitle = (
    <h1 className="text-header-h2 mb-16 search-result-title">Favourites</h1>
  );

  const materialsCountLine = materialsCount > 0 && (
    <p className="text-small-caption my-32">{materialsCount} materials</p>
  );

  const SkeletonList = () => (
    <ul className="card-list-page__list my-32">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <CardListItemSkeleton />
        </li>
      ))}
    </ul>
  );

  const FavouritesListContent = () => (
    <ul className="card-list-page__list my-32">
      {data.searchResult.slice(0, materialsCount).map((item, i) => (
        <CardListItem {...item} heartFill tintIndex={i} />
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
    <div className="card-list-page">
      {pageTitle}
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
