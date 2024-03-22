type OpeningHourCategory = {
  category: string;
  time: string;
};

export type OpeningHourDay = {
  day: string;
  categories: OpeningHourCategory[];
};
// TODO: Update data structure and types to match the actual data structure when this has been determined.
const openingHoursExampleData: OpeningHourDay[] = [
  {
    day: "Mandag d.23/01",
    categories: [
      { category: "Selvbetjening", time: "9:00am - 5:00pm" },
      { category: "Åbent", time: "9:00am - 5:00pm" },
      { category: "Borgerservice", time: "9:00am - 3:00pm" },
    ],
  },
  {
    day: "Tirsdag d. 24/01",
    categories: [
      { category: "Med betjening", time: "10:00am - 4:00pm" },
      { category: "Telefontid  (+45 30 30 30 30)", time: "8:00am - 10:00am" },
    ],
  },
  {
    day: "Onsdag d. 25/01",
    categories: [],
  },
  {
    day: "Torsdag d. 26/01",
    categories: [
      { category: "Åbent", time: "9:00am - 5:00pm" },
      { category: "Selvbetjening", time: "5:00pm - 8:00pm" },
      { category: "Telefontid", time: "8:00am - 10:00am" },
    ],
  },
  {
    day: "Friday d. 27/01",
    categories: [
      { category: "Med betjening", time: "9:00am - 1:00pm" },
      { category: "Borgerservice", time: "2:00pm - 5:00pm" },
    ],
  },
];

export default openingHoursExampleData;
