/* global flatpickr */
window.addEventListener("load", () => {
  // Support configuration by the caller through a global configuration object.
  const config = window.flatpickrOptions ?? {};
  if (typeof config !== "object") {
    // eslint-disable-next-line no-console
    console.error("Invalid flatpickr options", config);
  }

  const dateRange = document.querySelectorAll(".date-range");

  dateRange.forEach((e) => {
    const dateFrom = e.querySelector(".date-range__from");
    const dateTo = e.querySelector(".date-range__to");
    const fromToElements = !!dateFrom && !!dateTo;

    const flatPickrConfig = {
      ...{
        mode: "range",
        defaultDate: fromToElements ? [dateFrom.value, dateTo.value] : [],
        onChange: (selectedDates) => {
          if (!fromToElements) {
            return;
          }

          const formattedDates = selectedDates.map((date) => {
            // The en-CA date format uses the YYYY-MM-DD date format used by
            // date type input elements.
            return date.toLocaleDateString("en-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          });
          [dateFrom.value, dateTo.value] = formattedDates;
        },
      },
      ...config,
    };

    flatpickr(e.querySelector(".date-range__input"), flatPickrConfig);
  });
});
