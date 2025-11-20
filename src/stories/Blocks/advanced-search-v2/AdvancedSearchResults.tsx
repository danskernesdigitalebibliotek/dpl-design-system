import { FC } from "react";
import AdvancedSearchFilters from "./AdvancedSearchFilters";
import { CardListItem } from "../../Library/card-list-item/CardListItem";
import ResultPager from "../../Library/card-list-page/ResultPager";
import { SearchData } from "./types";

export type AdvancedSearchResultsType = {
  showFilters?: boolean;
  searchData?: SearchData;
};

const AdvancedSearchResults: FC<AdvancedSearchResultsType> = ({
  showFilters = true,
  searchData,
}) => {
  return (
    <div className="advanced-search-v2__results-container">
      <h2
        className="advanced-search-v2__result-heading"
        id="advanced-search-result"
      >
        Showing materials (55)
      </h2>

      <div className="advanced-search-v2__grid">
        {showFilters && (
          <AdvancedSearchFilters
            filterGroups={searchData?.filterGroups}
            toggles={searchData?.toggles}
          />
        )}

        <section className="content-list-page content-list-page--no-top-margin">
          <ul className="content-list content-list--no-top-margin">
            <li className="content-list__item" tabIndex={-1}>
              <CardListItem
                title="Serenity : the beauty of Arvo Pärt"
                author="Arvo Pärt"
                year="℗2012"
                availabilityLabels={1}
                tintIndex={0}
              />
            </li>
            <li className="content-list__item" tabIndex={-1}>
              <CardListItem
                title="Bouquet royal"
                author="Radioens Wienertrio"
                year="2021"
                availabilityLabels={1}
                tintIndex={1}
                heartFill
              />
            </li>
            <li className="content-list__item" tabIndex={-1}>
              <CardListItem
                title="Schönwald"
                author="Philipp Oehmke"
                year="2023"
                availabilityLabels={1}
                tintIndex={2}
              />
            </li>
          </ul>

          <ResultPager currentResults={50} totalResults={55} />
        </section>
      </div>
    </div>
  );
};

export default AdvancedSearchResults;
