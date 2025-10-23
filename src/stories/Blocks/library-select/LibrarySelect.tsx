import clsx from "clsx";

export type InputProps = {
  label: string;
  id: string;
  description?: string;
  validation?: string;
  classNames?: string;
  selectedLibrary?: {
    name: string;
    street: string;
    city: string;
  };
  onClickCallback?: () => void;
};

function LibrarySelect({
  label,
  id,
  description,
  validation,
  classNames,
  selectedLibrary,
  onClickCallback,
}: InputProps) {
  return (
    <div
      className={clsx("dpl-input", classNames, {
        "dpl-input--invalid": !!validation,
      })}
    >
      <label id={id} className="mb-8">
        {label}
      </label>
      <button
        type="button"
        className="library-select-button"
        id={id}
        onClick={onClickCallback}
      >
        {selectedLibrary ? (
          <div>
            <p className="library-select-button__name">
              {selectedLibrary.name}
            </p>
            <div className="library-select-button__address">
              <p>{selectedLibrary.street}</p>
              <p>{selectedLibrary.city}</p>
            </div>
          </div>
        ) : (
          <div>Vælg bibliotek</div>
        )}
        <img
          className="library-select-button__icon"
          src="icons/collection/ExpandMore.svg"
          alt="various-icon"
        />
      </button>
      {description && (
        <div className="dpl-input__description" id={`description-${id}`}>
          {description}
        </div>
      )}
      {validation && (
        <div id={`validation-${id}`} className="dpl-input__validation">
          {validation}
        </div>
      )}
    </div>
  );
}

export default LibrarySelect;
