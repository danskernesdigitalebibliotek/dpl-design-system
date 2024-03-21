/* eslint-disable import/no-extraneous-dependencies */
// Import default styling
import "flatpickr/dist/flatpickr.css";

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BaseOptions } from "flatpickr/dist/types/options";

declare global {
  interface Window {
    // Allow attachment of global Flatpickr configuration options.
    flatpickrOptions: Partial<BaseOptions>;
  }
}

export type DateRangeProps = {
  open: boolean;
};

const DateRange: React.FC<DateRangeProps> = ({ open }) => {
  // Use a set of static values for testing.
  const now = "2024-01-19";
  const from = "2024-01-01";
  const to = "2024-01-10";

  useEffect(() => {
    window.flatpickrOptions = {
      now,
      animate: false,
    };
    require("./date-range");
  }, []);

  useEffect(() => {
    const element = document.querySelector(
      ".date-range__input"
    ) as HTMLElement | null;

    if (element && open) {
      // Wait a bit for the calendar to load. Then click the input field to
      // open it.
      window.setTimeout(() => {
        element?.click();
      }, 1000);
    }
  }, [open]);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr@v4/dist/flatpickr.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js" />
      </Helmet>

      <div className="date-range">
        <input
          className="date-range__input"
          type="text"
          aria-label="Vælg dato"
        />
        <div className="date-range__values">
          <input className="date-range__from" type="date" defaultValue={from} />
          <input className="date-range__to" type="date" defaultValue={to} />
        </div>
      </div>
    </>
  );
};

export default DateRange;
