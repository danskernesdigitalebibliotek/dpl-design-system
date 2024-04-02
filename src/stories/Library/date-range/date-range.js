/* global flatpickr */
window.DateRange = {
  init(element, config) {
    const dateRange = element.querySelectorAll(".date-range");

    dateRange.forEach((e) => {
      const dateFrom = e.querySelector(".date-range__from");
      const dateTo = e.querySelector(".date-range__to");
      const fromToElements = !!dateFrom && !!dateTo;

      const flatPickrConfig = {
        ...{
          mode: "range",
          defaultDate: fromToElements ? [dateFrom.value, dateTo.value] : [],
          onClose: (selectedDates) => {
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
            // Dispatch a change event to allow others to react to the change.
            // This will not happen by default.
            dateFrom.dispatchEvent(new Event("change"));
          },
        },
        ...config,
      };

      flatpickr(e.querySelector(".date-range__input"), flatPickrConfig);
    });
  },
};
