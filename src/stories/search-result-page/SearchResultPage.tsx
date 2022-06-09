import { SearchResultInfo } from "../search-result-info/SearchResultInfo";
import { SearchResultItem } from "../search-result-item/SearchResultItem";
import { SearchResultPager } from "../search-result-pager/SearchResultPager";
import { SearchResultTitle } from "../search-result-title/SearchResultTitle";

export type SearchResultPageProps = {
  title: string;
  currentResults: string;
  totalResults: string;
  linkName: string;
  linkTotalResults: string;
};

const SearchResult = [
  {
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
    seriesNumber: "3",
    series: "Små mennesker, store drømme",
  },
  {
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
  },
  {
    heartFill: true,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
  },
  {
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
  },
];

const SearchResultList = SearchResult.map((item) => {
  return <SearchResultItem {...item} />;
});

export const SearchResultPage = ({
  title,
  linkName,
  linkTotalResults,
  currentResults,
  totalResults,
}: SearchResultPageProps) => {
  return (
    <div className="search-result-page">
      <SearchResultTitle title={title} totalResults={totalResults} />
      <SearchResultInfo
        linkName={linkName}
        linkTotalResults={linkTotalResults}
      />
      <div className="search-result-page__list my-32">{SearchResultList}</div>
      <SearchResultPager
        currentResults={currentResults}
        totalResults={totalResults}
      />
    </div>
  );
};
