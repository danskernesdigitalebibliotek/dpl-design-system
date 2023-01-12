import { SearchResultItem } from "../search-result-item/SearchResultItem";
import { SearchResultInfo } from "./SearchResultInfo";
import ResultPager from "./ResultPager";
import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultZero } from "./SearchResultZero";
import FacetLine from "./FacetLine";
import FacetLineSelected from "./FacetLineSelectedTerms";
import data from "./SearchResultPageData";

export type SearchResultPageProps = {
  title: string;
  currentResults: number;
  totalResults: number;
  linkName: string;
  linkTotalResults: string;
  zeroResult: boolean;
};

const SearchResultList = data.searchResult.map((item, index) => {
  const searchResultItem = (
    <SearchResultItem
      {...item}
      animateClasses={`animate__animated animate__slide-in-down animate__delay-${index}x`}
    />
  );
  return searchResultItem;
});

export const SearchResultPage = ({
  title,
  linkName,
  linkTotalResults,
  currentResults,
  totalResults,
  zeroResult,
}: SearchResultPageProps) => {
  return (
    <div className="search-result-page">
      <SearchResultTitle
        title={title}
        totalResults={zeroResult ? 0 : totalResults}
        zeroResult={zeroResult}
      />
      {zeroResult ? (
        <SearchResultZero
          searchHelpTitle="Prøv lorem ipsum... [hjælp til søgning]"
          linkName="bibliotekvagten.dk"
        />
      ) : (
        <>
          <SearchResultInfo
            linkName={linkName}
            linkTotalResults={linkTotalResults}
          />
          <FacetLine items={data.facetLineItems} />
          <FacetLineSelected items={data.selectedTerms} />
          <div className="search-result-page__list my-32">
            {SearchResultList}
          </div>
          <ResultPager
            currentResults={currentResults}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  );
};
