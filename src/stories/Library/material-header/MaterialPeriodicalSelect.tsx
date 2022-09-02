const MaterialPeriodicalSelect: React.FC = () => {
  const placeholderData = {
    year: ["2017", "2018", "2019", "2020", "2021", "2022"],
    weeks: ["30", "31", "32", "33", "34", "35"],
  };

  return (
    <div className="text-small-caption material-periodical ">
      <div className="material-periodical-select">
        <label htmlFor="year">Årgang</label>
        <div className="material-periodical-select__border-container">
          <select id="year">
            {placeholderData.year.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="material-periodical-select">
        <label htmlFor="weeks">Uge</label>
        <div className="material-periodical-select__border-container">
          <select id="weeks">
            {placeholderData.weeks.map((week) => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MaterialPeriodicalSelect;
