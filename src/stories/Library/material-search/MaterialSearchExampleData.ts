export const MaterialTypes = [
  "bog",
  "artikel",
  "tidsskrift",
  "lydbog",
  "film",
  "musik",
  "spil",
];

export interface PreviewDataProps {
  coverUrl: string;
  title: string;
  author: string;
  publicationYear: number;
  source: string;
  workId: string;
}
export const PreviewData: PreviewDataProps = {
  coverUrl: "images/book_cover_6.jpg",
  title: "Rødhals",
  author: "Jo Nesbø",
  publicationYear: 2022,
  source: "eReolen",
  workId: "work-of:800010-katalog:99122475830405763",
};

export const ListResultData: PreviewDataProps[] = [
  {
    coverUrl: "images/book_cover_3.jpg",
    title: "Book Title 3",
    author: "Author 3",
    publicationYear: 2019,
    source: "Library",
    workId: "work-of:800010-katalog:98432897",
  },
  {
    coverUrl: "images/book_cover_2.jpg",
    title: "Book Title 2",
    author: "Author 2",
    publicationYear: 2020,
    source: "eReolen",
    workId: "work-of:800010-katalog:2389129",
  },
  {
    coverUrl: "images/book_cover_6.jpg",
    title: "Rødhals",
    author: "Jo Nesbø",
    publicationYear: 2022,
    source: "eReolen",
    workId: "work-of:800010-katalog:99122475830405763",
  },
  {
    coverUrl: "images/book_cover_4.jpg",
    title: "Book Title 4",
    author: "Author 4",
    publicationYear: 2018,
    source: "eReolen",
    workId: "work-of:800010-katalog:9778817",
  },
  {
    coverUrl: "images/book_cover_5.jpg",
    title: "Book Title 5",
    author: "Author 5",
    publicationYear: 2017,
    source: "Library",
    workId: "work-of:800010-katalog:2093",
  },
];
