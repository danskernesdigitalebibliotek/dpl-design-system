import Disclosure from "../../disclosure/Disclosure";
import { Button } from "../../Buttons/button/Button";
import Modal from "../Modal";
import facetBrowserDummyData from "./facet-browser-dummy-data";
import { TagButton } from "../../tag/tag-button/TagButton";

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
  <Modal
    shownModal={showModal}
    classNames="modal-right modal--no-padding"
    orientation="right"
  >
    <section className="facet-browser">
      <header className="facet-browser__header">
        <h2 className="text-header-h3">{title}</h2>
        {clearAll && (
          <button className="link-tag cursor-pointer facet-browser__clear-btn">
            {clearAll}
          </button>
        )}
      </header>

      {facetBrowserDummyData.map((facet) => (
        <Disclosure
          fullWidth
          removeHeadlinePadding
          key={facet.title}
          headline={facet.title}
          headingLevel="h3"
        >
          <div className="facet-browser__facet-group">
            {facet.tags.map((tag) => (
              <TagButton key={tag}>{tag}</TagButton>
            ))}
          </div>
          <button className="link-tag cursor-pointer facet-browser__more-btn">
            {showMore}
          </button>
        </Disclosure>
      ))}

      <Button
        classNames="facet-browser__results-btn"
        label={showResults}
        disabled={false}
        collapsible
        size="medium"
        buttonType="none"
        variant="filled"
      />
    </section>
  </Modal>
);

export default FacetBrowser;
