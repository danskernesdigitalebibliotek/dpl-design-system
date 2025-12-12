import React from "react";

const ComboBoxAutosuggest: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <div className="advanced-search-filter__combobox-wrapper">
      <input
        className="combobox-input"
        placeholder="Search in all material…"
        type="text"
        data-focus
        data-open=""
      />
      {open && (
        <div
          className="combobox-options"
          aria-labelledby=""
          role="listbox"
          data-open=""
          style={
            {
              "--input-width": "100%",
              "--button-width": "0px",
            } as React.CSSProperties
          }
        >
          <div
            role="option"
            aria-selected="true"
            aria-label="Selected option"
            data-selected=""
            style={{ display: "none" }}
          />
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_73_"
            role="option"
            aria-selected="false"
          >
            Harry Potter
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_74_"
            role="option"
            aria-selected="false"
          >
            Harry Bosch
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_75_"
            role="option"
            aria-selected="false"
          >
            Harry Hole
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_76_"
            role="option"
            aria-selected="false"
          >
            Harry Potter og De Vises Sten
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_77_"
            role="option"
            aria-selected="false"
          >
            Potter, Harry (Fictitious character) -- Juvenile fiction
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_78_"
            role="option"
            aria-selected="false"
          >
            Harry Potter-film
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_7b_"
            role="option"
            aria-selected="false"
          >
            Harry Potter og Fønixordenen
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_7c_"
            role="option"
            aria-selected="false"
          >
            Harry Potter og Hemmelighedernes Kammer
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_7d_"
            role="option"
            aria-selected="false"
          >
            Harry Potter og fangen fra Azkaban
          </div>
          <div
            className="combobox-option"
            id="headlessui-combobox-option-_r_7e_"
            role="option"
            aria-selected="false"
          >
            Harry Potter-bøger
          </div>
        </div>
      )}
    </div>
  );
};

export default ComboBoxAutosuggest;
