// These types are based on the actual data structure returned from the API.
// The types starting with DplOpeningHours.. are generated with Orval in react
// and copy pasted here.
export type DplOpeningHoursListGET200Item = {
  /** An serial unique id of the opening hours instance. */
  id: number;
  category: DplOpeningHoursListGET200ItemCategory;
  /** The date which the opening hours applies to. In ISO 8601 format. */
  date: string;
  /** When the opening hours start. In format HH:MM */
  start_time: string;
  /** When the opening hours end. In format HH:MM */
  end_time: string;
  /** The id for the branch the instance belongs to */
  branch_id: number;
};
export type DplOpeningHoursListGET200ItemCategory = {
  title: string;
  /** A CSS compatible color code which can be used to represent the category */
  color: string;
};

export type GroupedOpeningHours = Array<{
  day: string;
  date: string;
  openingHourEntries: DplOpeningHoursListGET200Item[];
}>;

// Example data in the format it is used in the grouped opening hours component
export const groupedOpeningHoursExampleData: GroupedOpeningHours = [
  {
    day: "Mandag",
    date: "2024-03-18",
    openingHourEntries: [
      {
        id: 0,
        category: {
          title: "Åbent",
          color: "#0000FF",
        },
        date: "2024-03-18",
        start_time: "09:00",
        end_time: "12:00",
        branch_id: 1,
      },
      {
        id: 1,
        category: {
          title: "Selvbetjening",
          color: "#FF0000",
        },
        date: "2024-03-18",
        start_time: "13:00",
        end_time: "16:00",
        branch_id: 1,
      },
      {
        id: 2,
        category: {
          title: "Med betjening",
          color: "#008000",
        },
        date: "2024-03-18",
        start_time: "17:00",
        end_time: "19:00",
        branch_id: 1,
      },
    ],
  },
  {
    day: "Tirsdag",
    date: "2024-03-19",
    openingHourEntries: [
      {
        id: 3,
        category: {
          title: "Telefontid",
          color: "#FFFF00",
        },
        date: "2024-03-19",
        start_time: "08:00",
        end_time: "10:00",
        branch_id: 1,
      },
      {
        id: 4,
        category: {
          title: "Borgerservice",
          color: "#0000FF",
        },
        date: "2024-03-19",
        start_time: "11:00",
        end_time: "13:00",
        branch_id: 1,
      },
      {
        id: 5,
        category: {
          title: "Børneetagen",
          color: "#FF0000",
        },
        date: "2024-03-19",
        start_time: "14:00",
        end_time: "17:00",
        branch_id: 1,
      },
    ],
  },
  {
    day: "Onsdag",
    date: "2024-03-20",
    openingHourEntries: [
      {
        id: 6,
        category: {
          title: "Makerlab",
          color: "#0000FF",
        },
        date: "2024-03-20",
        start_time: "09:00",
        end_time: "12:00",
        branch_id: 1,
      },
      {
        id: 7,
        category: {
          title: "Åbent",
          color: "#008000",
        },
        date: "2024-03-20",
        start_time: "13:00",
        end_time: "15:00",
        branch_id: 1,
      },
      {
        id: 8,
        category: {
          title: "Selvbetjening",
          color: "#FFFF00",
        },
        date: "2024-03-20",
        start_time: "16:00",
        end_time: "19:00",
        branch_id: 1,
      },
    ],
  },
  {
    day: "Torsdag",
    date: "2024-03-21",
    openingHourEntries: [
      {
        id: 9,
        category: {
          title: "Med betjening",
          color: "#0000FF",
        },
        date: "2024-03-21",
        start_time: "09:00",
        end_time: "11:00",
        branch_id: 1,
      },
      {
        id: 10,
        category: {
          title: "Telefontid",
          color: "#FF0000",
        },
        date: "2024-03-21",
        start_time: "12:00",
        end_time: "14:00",
        branch_id: 1,
      },
      {
        id: 11,
        category: {
          title: "Borgerservice",
          color: "#008000",
        },
        date: "2024-03-21",
        start_time: "15:00",
        end_time: "18:00",
        branch_id: 1,
      },
    ],
  },
  {
    day: "Fredag",
    date: "2024-03-22",
    openingHourEntries: [
      {
        id: 12,
        category: {
          title: "Børneetagen",
          color: "#0000FF",
        },
        date: "2024-03-22",
        start_time: "10:00",
        end_time: "13:00",
        branch_id: 1,
      },
    ],
  },
  {
    day: "Lørdag",
    date: "2024-03-23",
    openingHourEntries: [],
  },
  {
    day: "Søndag",
    date: "2024-03-24",
    openingHourEntries: [
      {
        id: 18,
        category: {
          title: "Borgerservice",
          color: "#008000",
        },
        date: "2024-03-24",
        start_time: "10:00",
        end_time: "13:00",
        branch_id: 1,
      },
      {
        id: 19,
        category: {
          title: "Børneetagen",
          color: "#FFFF00",
        },
        date: "2024-03-24",
        start_time: "14:00",
        end_time: "18:00",
        branch_id: 1,
      },
      {
        id: 20,
        category: {
          title: "Makerlab",
          color: "#0000FF",
        },
        date: "2024-03-24",
        start_time: "19:00",
        end_time: "21:00",
        branch_id: 1,
      },
    ],
  },
];

export default groupedOpeningHoursExampleData;
