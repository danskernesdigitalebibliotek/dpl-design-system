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
    <div className="content-list-page">
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
      <ul className="content-list">
        {[...Array(5)].map((_, index) => (
          <li className="content-list__item" key={index}>
            <CardListItemSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
};
