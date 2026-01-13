const AdvancedSearchRadiobuttonGroup: React.FC = () => {
  return (
    <div className="advanced-search-radio-group" role="radiogroup">
      <span role="radio" aria-checked="false">
        <div
          className="advanced-search-radio-group__label"
          data-headlessui-state=""
        >
          <span className="advanced-search-radio-group__input " />
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
          className="advanced-search-radio-group__label"
          data-headlessui-state=""
        >
          <span className="advanced-search-radio-group__input advanced-search-radio-group__input--checked" />
          Fysisk
        </div>
      </span>
    </div>
  );
};

export default AdvancedSearchRadiobuttonGroup;
