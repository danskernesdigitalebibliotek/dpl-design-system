const openingHoursData = [
  { term: "Selvbetjening & læsesale", description: "7:00 - 22:00" },
  { term: "Personlig betjening:", description: "9:00 - 16:00" },
  { term: "Telefon (+45 30 30 30 30):", description: "7:00 - 22:00" },
];

const defaultLibraries = [
  {
    id: "1",
    name: "Hovedbiblioteket",
    openingHoursData,
  },
  {
    id: "2",
    name: "BIBLIOTEKET Rentemestervej",
    openingHoursData,
  },
  {
    id: "3",
    name: "Bibliotekshuset",
    openingHoursData,
  },
  {
    id: "4",
    name: "Blågårdens Bibliotek",
    openingHoursData,
  },
];

export default defaultLibraries;
