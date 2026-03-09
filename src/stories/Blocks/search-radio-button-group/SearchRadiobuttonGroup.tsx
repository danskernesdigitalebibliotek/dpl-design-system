const SearchRadiobuttonGroup: React.FC = () => {
  return (
    <div className="search-radio-button-group" role="radiogroup">
      <span role="radio" aria-checked="false">
        <div
          className="search-radio-button-group__label"
          data-headlessui-state=""
        >
          <span className="search-radio-button-group__input " />
          Online
        </div>
      </span>
      <span
        role="radio"
        aria-checked="true"
        data-headlessui-state="checked"
        data-checked=""
      >
        <div
          className="search-radio-button-group__label"
          data-headlessui-state=""
        >
          <span className="search-radio-button-group__input search-radio-button-group__input--checked" />
          Fysisk
        </div>
      </span>
    </div>
  );
};

export default SearchRadiobuttonGroup;
