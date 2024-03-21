/* eslint-disable import/no-extraneous-dependencies */
// Import default styling
import "flatpickr/dist/flatpickr.css";

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BaseOptions } from "flatpickr/dist/types/options";
import clsx from "clsx";

declare global {
  interface Window {
    // Allow attachment of global Flatpickr configuration options.
    flatpickrOptions: Partial<BaseOptions>;
  }
}

type Modifiers = "filter";

export type DateRangeProps = {
  open?: boolean;
  modifiers?: Modifiers[];
};

const DateRange: React.FC<DateRangeProps> = ({ open, modifiers }) => {
  // Use a set of static values for testing.
  const now = "2024-01-19";
  const from = "2024-01-01";
  const to = "2024-01-10";

  useEffect(() => {
    window.flatpickrOptions = {
      now,
      animate: false,
      altInput: true,
      altFormat: "j. M Y",
      // For whatever reason we cannot load the Danish translation properly
      // in Storybook.
      // locale: da
      locale: {
        firstDayOfWeek: 1,
      },
    };
    require("./date-range");
  }, []);

  useEffect(() => {
    if (open) {
      // Wait a bit for the calendar to load. Then click the input field to
      // open it.
      window.setTimeout(() => {
        const elements = document.querySelectorAll(
          ".date-range__input"
        ) as NodeListOf<HTMLElement>;

        elements.forEach((e) => {
          e.click();
        });
      }, 250);
    }
  }, [open]);

  const classNames = clsx(
    "date-range",
    modifiers?.map((modifier) => `date-range--${modifier}`)
  );

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr@v4/dist/flatpickr.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js" />
      </Helmet>

      <div className={classNames}>
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
