import { SearchResultItem } from "../search-result-item/SearchResultItem";
import { SearchResultInfo } from "./SearchResultInfo";
import ResultPager from "./ResultPager";
import { SearchResultTitle } from "./SearchResultTitle";
import { SearchResultZero } from "./SearchResultZero";

export type SearchResultPageProps = {
  title: string;
  currentResults: string;
  totalResults: string;
  linkName: string;
  linkTotalResults: string;
  zeroResult: boolean;
};

const SearchResult = [
  {
    coverUrl: "images/book_cover_1.jpg",
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
    seriesNumber: "3",
    series: "Små mennesker, store drømme",
  },
  {
    coverUrl: "images/book_cover_2.jpg",
    heartFill: false,
    title: "De uadskillelige",
    author: "Simone de Beauvoir",
    year: "2020",
  },
  {
    coverUrl: "images/book_cover_3.jpg",
    heartFill: true,
    title: "Døgnkioskmennesket",
    author: "Sayaka Murata",
    year: "2019",
  },
  {
    coverUrl: "images/book_cover_4.jpg",
    heartFill: false,
    title: "Testamente",
    author: "Nina Wähä (f. 1979)",
    year: "2019",
  },
  {
    coverUrl: "images/book_cover_5.jpg",
    heartFill: false,
    title: "Sønnen (Norsk)",
    author: "Jo Nesbø",
    year: "2014",
  },
  {
    coverUrl: "images/book_cover_6.jpg",
    heartFill: false,
    title: "Den bæredygtige stat",
    author: "Rasmus Willig, Anders Blok",
    year: "2020",
  },
  {
    coverUrl: "images/book_cover_7.jpg",
    heartFill: false,
    title: "Den lille bog om dansk design - for børn og barnlige sjæle",
    author: "Marie Hugsted",
    year: "2018",
  },
  {
    coverUrl: "images/book_cover_8.jpg",
    heartFill: false,
    title: "Den lille prins (Ved Henrik Ægidius)",
    author: "Antoine de Saint-Exupéry",
    year: "2016",
  },
  {
    coverUrl: "images/book_cover_9.jpg",
    heartFill: false,
    title: "Yayoi Kusama",
    author: "",
    year: "2014",
  },
  {
    coverUrl: "images/book_cover_10.jpg",
    heartFill: false,
    title: "Kvinde kend din historie - spejl dig i fortiden",
    author: "Gry Jexen",
    year: "2021",
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
  zeroResult,
}: SearchResultPageProps) => {
  return (
    <div className="search-result-page">
      <SearchResultTitle
        title={title}
        totalResults={zeroResult ? "0" : totalResults}
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
