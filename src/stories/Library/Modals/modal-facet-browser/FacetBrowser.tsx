import { Disclosure } from "../../disclosure/Disclosure";
import { Button } from "../../Buttons/button/Button";
import Modal from "../Modal";
import FacetBrowserTag from "./FacetBrowserTag";
import facetBrowserDummyData from "./facet-browser-dummy-data";

export type FacetBrowserProps = {
  title: string;
  showModal: boolean;
  clearAll?: string;
  showMore: string;
  showResults: string;
};

const FacetBrowser: React.FC<FacetBrowserProps> = ({
  showModal,
  title,
  clearAll,
  showMore,
  showResults,
}) => (
  <div className="modal__backdrop">
    <Modal shownModal={showModal} classNames="modal-right modal--no-padding">
      <section className="facet-browser">
        <header className="facet-browser-header">
          <h3 className="text-header-h3">{title}</h3>
          {clearAll && (
            <button className="facet-browser-clear-all-btn">{clearAll}</button>
          )}
        </header>

        {facetBrowserDummyData.map((facet) => (
          <Disclosure key={facet.title} headline={facet.title}>
            <div className="facet-browser-facets">
              {facet.tags.map((tag) => (
                <FacetBrowserTag tag={tag} key={tag} />
              ))}
            </div>
            <button className="facet-browser-show-more-btn">{showMore}</button>
          </Disclosure>
        ))}

        <Button
          classNames="facet-browser-show-results-btn"
          label={showResults}
          disabled={false}
          collapsible
          size="medium"
          buttonType="none"
          variant="filled"
        />
      </section>
    </Modal>
  </div>
);

export default FacetBrowser;
