import { FacetLineItem } from "./FacetLine";

const searchResult = [
  {
    coverUrl: "images/book_cover_1.jpg",
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
    seriesNumber: "3",
    series: "Små mennesker, store drømme",
    availabilityLabels: 1,
  },
  {
    coverUrl: "images/book_cover_2.jpg",
    heartFill: false,
    title: "De uadskillelige",
    author: "Simone de Beauvoir",
    year: "2020",
    availabilityLabels: 3,
  },
  {
    coverUrl: "images/book_cover_3.jpg",
    heartFill: true,
    title: "Døgnkioskmennesket",
    author: "Sayaka Murata",
    year: "2019",
    availabilityLabels: 4,
  },
  {
    coverUrl: "images/book_cover_4.jpg",
    heartFill: false,
    title: "Testamente",
    author: "Nina Wähä (f. 1979)",
    year: "2019",
    availabilityLabels: 3,
  },
  {
    coverUrl: "images/book_cover_5.jpg",
    heartFill: false,
    title: "Sønnen (Norsk)",
    author: "Jo Nesbø",
    year: "2014",
    availabilityLabels: 2,
  },
  {
    coverUrl: "images/book_cover_6.jpg",
    heartFill: false,
    title: "Den bæredygtige stat",
    author: "Rasmus Willig, Anders Blok",
    year: "2020",
    availabilityLabels: 2,
  },
  {
    coverUrl: "images/book_cover_7.jpg",
    heartFill: false,
    title: "Den lille bog om dansk design - for børn og barnlige sjæle",
    author: "Marie Hugsted",
    year: "2018",
    availabilityLabels: 2,
  },
  {
    coverUrl: "images/book_cover_8.jpg",
    heartFill: false,
    title: "Den lille prins (Ved Henrik Ægidius)",
    author: "Antoine de Saint-Exupéry",
    year: "2016",
    availabilityLabels: 2,
  },
  {
    coverUrl: "images/book_cover_9.jpg",
    heartFill: false,
    title: "Yayoi Kusama",
    author: "",
    year: "2014",
    availabilityLabels: 2,
  },
  {
    coverUrl: "images/book_cover_10.jpg",
    heartFill: false,
    title: "Kvinde kend din historie - spejl dig i fortiden",
    author: "Gry Jexen",
    year: "2021",
    availabilityLabels: 2,
  },
];

const facetLineItems = [
  { title: "fantasy", facet: "genreAndForm", type: "term", score: 96 },
  {
    title: "Faglitteratur",
    facet: "fictionNonfiction",
    type: "term",
    score: 302,
  },
  { title: "bog", facet: "materialType", type: "term", score: 28 },
  { title: "Spil", facet: "workTypes", type: "term", score: 21 },
  {
    title: "emner",
    type: "facet",
    terms: [
      { title: "Børnebøger", facet: "emner", type: "term", score: 96 },
      { title: "magi", facet: "emner", type: "term", score: 302 },
      { title: "troldmænd", facet: "emner", type: "term", score: 28 },
    ],
  },
] as (FacetLineItem<"term"> | FacetLineItem<"facet">)[];

const selectedTerms = [
  { title: "magi", facet: "subjects", type: "term", score: 302 },
  { title: "bog", facet: "materialType", type: "term", score: 28 },
  { title: "Spil", facet: "workTypes", type: "term", score: 21 },
] as FacetLineItem<"term">[];

export default {
  searchResult,
  facetLineItems,
  selectedTerms,
};
