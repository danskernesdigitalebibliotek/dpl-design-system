import { CardListItem } from "../card-list-item/CardListItem";
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

const SearchResultList = data.searchResult.map((item, i) => {
  return <CardListItem {...item} tintIndex={i} />;
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
    <div className="card-list-page">
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
          <div className="card-list-page__list my-32">{SearchResultList}</div>
          <ResultPager
            currentResults={currentResults}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  );
};
