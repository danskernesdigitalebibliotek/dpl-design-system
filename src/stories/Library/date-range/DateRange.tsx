/* eslint-disable import/no-extraneous-dependencies */
// Import default styling
import "flatpickr/dist/flatpickr.css";

import flatpickr from "flatpickr";
import { Instance } from "flatpickr/dist/types/instance";
import React, { MutableRefObject, useCallback, useRef } from "react";
import { BaseOptions } from "flatpickr/dist/types/options";

const DateRange: React.FC = () => {
  const picker = useRef() as MutableRefObject<Instance>;

  const calendar = useCallback((node: Node | null) => {
    const options: Partial<BaseOptions> = {
      animate: false,
      mode: "range",
      defaultDate: ["2024-01-01", "2024-01-10"],
      now: "2024-01-19",
    };

    if (node !== null) {
      picker.current = flatpickr(node, options);
    }
  }, []);

  return (
    <div className="date-range">
      <input
        className="date-range__input"
        ref={calendar}
        type="text"
        aria-label="Vælg dato"
      />
    </div>
  );
};

export default DateRange;
