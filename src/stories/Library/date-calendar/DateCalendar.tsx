/* eslint-disable import/no-extraneous-dependencies */
// Import default styling
import "flatpickr/dist/flatpickr.css";

import flatpickr from "flatpickr";
import { Instance } from "flatpickr/dist/types/instance";
import { MutableRefObject, useCallback, useRef } from "react";
import { BaseOptions } from "flatpickr/dist/types/options";

const DateCalendar = () => {
  const picker = useRef() as MutableRefObject<Instance>;

  const calendar = useCallback((node: Node | null) => {
    const options: Partial<BaseOptions> = {
      inline: true,
      animate: false,
    };

    if (node !== null) {
      picker.current = flatpickr(node, options);
    }
  }, []);

  return <input type="text" ref={calendar} />;
};

export default DateCalendar;
