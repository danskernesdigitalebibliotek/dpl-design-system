import React from "react";
import { InputWithDropdown } from "../../Library/input-with-dropdown/InputWithDropdown";
import { Multiselect } from "../../Library/multiselect/Multiselect";
import { Button } from "../../Library/Buttons/button/Button";
import InputPreview from "../../Library/input-preview/InputPreview";
import data from "../../Library/card-list-page/SearchResultPageData";
import { CardListItem } from "../../Library/card-list-item/CardListItem";
import ResultPager from "../../Library/card-list-page/ResultPager";
import { ReactComponent as PlusButtonIcon } from "../../../public/icons/collection/PlusButton.svg";

export interface AdvancedSearchProps {
  inputPlaceholder: string;
  inputAmount: number;
  cqlPreviewText: string;
  isCqlSearch: boolean;
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  inputPlaceholder,
  inputAmount,
  cqlPreviewText,
  isCqlSearch,
}) => {
  return (
    <div className="advanced-search">
      <h1 className="text-header-h2 advanced-search__title capitalize-first">
        {isCqlSearch ? "CQL søgning" : "Avanceret søgning"}
      </h1>
      {!isCqlSearch && (
        <>
          <div className="input-and-preview">
            <div className="input-and-preview__input">
              <InputWithDropdown inputPlaceholder={inputPlaceholder} />
              {Array(inputAmount - 1)
                .fill(0)
                .map(() => {
                  return (
                    <>
                      <div className="advanced-search__clauses">
                        <button className="advanced-search__clause focus-styling">
                          OG
                        </button>
                        <button className="advanced-search__clause advanced-search__clause--grey focus-styling">
                          ELLER
                        </button>
                        <button className="advanced-search__clause advanced-search__clause--grey focus-styling">
                          IKKE
                        </button>
                      </div>
                      <InputWithDropdown inputPlaceholder={inputPlaceholder} />
                    </>
                  );
                })}
              <button className="advanced-search__clauses">
                <PlusButtonIcon className="mr-8" />
                Tilføj ny linje
              </button>
            </div>
            <InputPreview cqlPreviewText={cqlPreviewText} />
          </div>
          <section className="advanced-search__filters">
            {Array(3)
              .fill(0)
              .map((item, index) => {
                return (
                  <div
                    className="advanced-search__filter"
                    key={`${item}${index}`}
                  >
                    <Multiselect
                      options={["Mulighed 1", "Mulighed 2", "Mulighed 3"]}
                      withCaption
                      isOpen={index === 0}
                    />
                  </div>
                );
              })}
          </section>
          <InputPreview cqlPreviewText={cqlPreviewText} isMobile />
        </>
      )}
      {isCqlSearch && (
        <textarea
          className="advanced-search__cql-input focus-styling__input"
          cols={100}
          rows={5}
          placeholder="e.g. title=snemand*"
        />
      )}
      <footer className="advanced-search__footer">
        {isCqlSearch && (
          <button className="link-tag advanced-search__back-button">
            Til avanceret søgning
          </button>
        )}
        <Button
          size="xlarge"
          label="Søg"
          buttonType="none"
          variant="filled"
          collapsible={false}
          disabled={false}
          classNames="advanced-search__search-button"
        />
      </footer>
      <div className="advanced-search__divider" />
      <section>
        <h2 className="text-header-h2 advanced-search__title capitalize-first">
          Viser materialer (20)
        </h2>
        <button className="link-tag mb-16">Link til søgninget</button>
        <div className="card-list-page__list my-32">
          {data.searchResult.map((item, i) => {
            return <CardListItem {...item} tintIndex={i} />;
          })}
        </div>
        <ResultPager currentResults={10} totalResults={20} />
      </section>
    </div>
  );
};

export default {};
