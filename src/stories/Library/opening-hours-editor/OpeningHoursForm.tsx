import React from "react";

const OpeningHoursForm = () => {
  const openingHoursCategories = [
    {
      title: "Åbent",
      color: "blue",
    },
    {
      title: "Selvbetjening",
      color: "yellow",
    },
    {
      title: "Med betjening",
      color: "green",
    },
    {
      title: "Telefontid",
      color: "grey",
    },
    {
      title: "Borgerservice",
      color: "orange",
    },
    {
      title: "Børneetagen",
      color: "lightblue",
    },
    {
      title: "Makerlab",
      color: "purple",
    },
  ];

  const [category, setCategory] = React.useState(openingHoursCategories[0]);
  const [startTime, setStartTime] = React.useState("08:00");
  const [endTime, setEndTime] = React.useState("16:00");

  return (
    <form className="opening-hours-editor-form">
      <label
        htmlFor="event-form-title"
        className="opening-hours-editor-form__label"
      >
        Title:
      </label>
      <select
        className="opening-hours-editor-form__select"
        id="event-form-title"
        value={category?.title}
        onChange={(e) => {
          setCategory(
            openingHoursCategories.find(
              (item) => item.title === e.target.value
            ) || openingHoursCategories[0]
          );
        }}
      >
        {openingHoursCategories.map((categoryItem) => (
          <option key={categoryItem.title} value={categoryItem.title}>
            {categoryItem.title}
          </option>
        ))}
      </select>
      <label
        htmlFor="event-form-start-time"
        className="opening-hours-editor-form__label"
      >
        Start Time:
      </label>
      <input
        className="opening-hours-editor-form__time-input"
        id="event-form-start-time"
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <label
        htmlFor="event-form-end-time"
        className="opening-hours-editor-form__label"
      >
        End Time:
      </label>
      <input
        className="opening-hours-editor-form__time-input"
        id="event-form-end-time"
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        min={startTime}
        max="00:00"
      />
      <button className="opening-hours-editor-form__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default OpeningHoursForm;
