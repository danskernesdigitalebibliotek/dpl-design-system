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
                        <button
                          className="advanced-search__clause focus-styling"
                          aria-label="og"
                        >
                          OG
                        </button>
                        <button
                          className="advanced-search__clause advanced-search__clause--grey focus-styling"
                          aria-label="eller"
                        >
                          ELLER
                        </button>
                        <button
                          className="advanced-search__clause advanced-search__clause--grey focus-styling"
                          aria-label="ikke"
                        >
                          IKKE
                        </button>
                      </div>
                      <InputWithDropdown inputPlaceholder={inputPlaceholder} />
                    </>
                  );
                })}
              <button
                className="advanced-search__clauses"
                aria-label="tilføj ny linje"
              >
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
          <button
            className="link-tag advanced-search__back-button"
            aria-label="til avanceret søgning"
          >
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
      <section className="content-list-page">
        <h2 className="content-list-page__heading">Viser materialer (20)</h2>
        <div className="content-list-page__subheading">
          <button className="link-tag">Link til søgninget</button>
        </div>
        <ul className="content-list">
          {data.searchResult.map((item, i) => {
            return (
              <li className="content-list__item">
                <CardListItem {...item} tintIndex={i} key={i} />
              </li>
            );
          })}
        </ul>
        <ResultPager currentResults={10} totalResults={20} />
      </section>
    </div>
  );
};

export default {};
