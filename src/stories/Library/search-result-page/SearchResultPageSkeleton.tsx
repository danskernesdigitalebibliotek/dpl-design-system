import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultItemSkeleton } from "../search-result-item/SearchResultItemSkeleton";

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
    <div className="search-result-page">
      <SearchResultTitle
        title={title}
        totalResults={0}
        zeroResult={false}
        isLoading
      />
      <div className="search-result-page__skeleton-facet-line--mobile">
        <div className="ssc mt-48">
          <div className="ssc-head-line mb" />
          <div className="ssc-head-line mb" />
          <div className="ssc-head-line mb" />
        </div>
      </div>
      <div className="search-result-page__skeleton-facet-line--desktop">
        <div className="ssc mt-48">
          <div className="ssc-head-line mb" />
        </div>
      </div>
      <ul className="search-result-page__list my-32">
        <li>
          <SearchResultItemSkeleton />
        </li>
        <li>
          <SearchResultItemSkeleton />
        </li>
        <li>
          <SearchResultItemSkeleton />
        </li>
        <li>
          <SearchResultItemSkeleton />
        </li>
        <li>
          <SearchResultItemSkeleton />
        </li>
      </ul>
    </div>
  );
};
