import { SearchResultTitle } from "./SearchResultTitle";
import { CardListItemSkeleton } from "../card-list-item/CardListItemSkeleton";

export type SearchResultPageSkeletonProps = {
  title: string;
  currentResults: number;
  totalResults: number;
  linkName: string;
  linkTotalResults: string;
  zeroResult: boolean;
};

export const SearchResultPageSkeleton = ({
  title,
}: SearchResultPageSkeletonProps) => {
  return (
    <div className="card-list-page">
      <SearchResultTitle
        title={title}
        totalResults={0}
        zeroResult={false}
        isLoading
      />
      <div className="card-list-page__skeleton-facet-line--mobile">
        <div className="ssc mt-48">
          <div className="ssc-head-line mb" />
          <div className="ssc-head-line mb" />
          <div className="ssc-head-line mb" />
        </div>
      </div>
      <div className="card-list-page__skeleton-facet-line--desktop">
        <div className="ssc mt-48">
          <div className="ssc-head-line mb" />
        </div>
      </div>
      <ul className="card-list-page__list my-32">
        <li>
          <CardListItemSkeleton />
        </li>
        <li>
          <CardListItemSkeleton />
        </li>
        <li>
          <CardListItemSkeleton />
        </li>
        <li>
          <CardListItemSkeleton />
        </li>
        <li>
          <CardListItemSkeleton />
        </li>
      </ul>
    </div>
  );
};
