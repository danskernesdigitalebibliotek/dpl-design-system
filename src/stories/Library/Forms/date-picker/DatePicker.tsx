/* eslint-disable import/no-extraneous-dependencies */
// Import default styling
import "flatpickr/dist/flatpickr.css";
import flatpickr from "flatpickr";
import { english } from "flatpickr/dist/l10n/default";
import { Danish } from "flatpickr/dist/l10n/da";
import { Instance } from "flatpickr/dist/types/instance";
import { MutableRefObject, useCallback, useRef } from "react";
import { BaseOptions } from "flatpickr/dist/types/options";
import { ReactComponent as ExpandMoreIcon } from "../../../../public/icons/collection/ExpandMore.svg";

export type DatePickerProps = {
  locale?: "en" | "da";
};

const DatePicker = (props: DatePickerProps) => {
  const { locale = "en" } = props;
  const picker = useRef() as MutableRefObject<Instance>;

  const pickerRef = useCallback(
    (node: Node | null) => {
      const options: Partial<BaseOptions> = {
        wrap: true,
        static: true,
        locale: locale === "en" ? english : Danish,
      };

      if (node !== null) {
        picker.current = flatpickr(node, options);
      }
    },
    [locale]
  );

  return (
    <div className="datepicker">
      <div className="datepicker__wrapper" ref={pickerRef}>
        <input
          type="text"
          placeholder="Date"
          className="datepicker__input"
          data-input
        />
        <button
          name="Toggle datepicker"
          className="datepicker__opener"
          data-toggle
        >
          <ExpandMoreIcon className="datepicker__icon" />
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
