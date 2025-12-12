import React from "react";

const SearchTermSelect: React.FC<{ open?: boolean }> = ({ open }) => {
  return (
    <div className="select select--focused" data-open="">
      <button
        className="select-button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        data-open=""
        data-active=""
      >
        <span>Free text search</span>
        <div className="select-button__arrow">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.73594 8.2034 6.1526 8.1792 6.44621 8.39705L6.53033 8.46967L12 13.939L17.4697 8.46967C17.7359 8.2034 18.1526 8.1792 18.4462 8.39705L18.5303 8.46967C18.7966 8.73594 18.8208 9.1526 18.6029 9.44621L18.5303 9.53033L12.5303 15.5303C12.2641 15.7966 11.8474 15.8208 11.5538 15.6029L11.4697 15.5303L5.46967 9.53033Z' fill='black'/%3e %3c/svg%3e"
          />
        </div>
      </button>
      {open && (
        <div
          className="select-options"
          aria-orientation="vertical"
          aria-label="Select search term"
          role="listbox"
          data-open=""
          style={{ "--button-width": "370px" } as React.CSSProperties}
        >
          <div
            className="select-option"
            role="option"
            aria-selected="true"
            data-selected=""
          >
            Free text search
          </div>
          <div className="select-option" role="option" aria-selected="false">
            Title
          </div>
          <div className="select-option" role="option" aria-selected="false">
            Series title
          </div>
          <div className="select-option" role="option" aria-selected="false">
            Author / Creator
          </div>
          <div className="select-option" role="option" aria-selected="false">
            Subject
          </div>
          <div className="select-option" role="option" aria-selected="false">
            Publisher
          </div>
          <div className="select-option" role="option" aria-selected="false">
            DK5
          </div>
          <div className="select-option" role="option" aria-selected="false">
            ISBN
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTermSelect;
