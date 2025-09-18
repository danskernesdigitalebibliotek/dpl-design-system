import { CardListItem } from "../card-list-item/CardListItem";
import { SearchResultInfo } from "./SearchResultInfo";
import ResultPager from "./ResultPager";
import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultZero } from "./SearchResultZero";
import FacetLine from "./FacetLine";
import FacetLineSelected from "./FacetLineSelectedTerms";
import data from "./SearchResultPageData";
import CardListInfoBox from "../card-list-info-box/CardListInfoBox";

export type SearchResultPageProps = {
  title: string;
  currentResults: number;
  totalResults: number;
  linkName: string;
  linkTotalResults: string;
  zeroResult: boolean;
  infoBoxTitle?: string;
  infoBoxHtml?: string;
  infoBoxButtonText?: string;
};

export const SearchResultPage = ({
  title,
  linkName,
  linkTotalResults,
  currentResults,
  totalResults,
  zeroResult,
  infoBoxTitle,
  infoBoxHtml,
  infoBoxButtonText,
}: SearchResultPageProps) => {
  return (
    <div className="content-list-page">
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
          <ul className="content-list">
            {data.searchResult.map((item, i) => {
              if (i === 5) {
                return (
                  <>
                    <li className="content-list__item">
                      <CardListInfoBox
                        title={infoBoxTitle}
                        html={infoBoxHtml}
                        buttonText={infoBoxButtonText}
                      />
                    </li>
                    <li className="content-list__item" key={i}>
                      <CardListItem {...item} tintIndex={i} />
                    </li>
                  </>
                );
              }

              return (
                <li className="content-list__item" key={i}>
                  <CardListItem {...item} tintIndex={i} />
                </li>
              );
            })}
          </ul>
          <ResultPager
            currentResults={currentResults}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  );
};
