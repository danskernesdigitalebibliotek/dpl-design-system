import { Button } from "../../Buttons/button/Button";
import Modal from "../Modal";

export type ModalSearchProps = {
  showModal: boolean;
};

export const ModalSearch: React.FC<ModalSearchProps> = ({ showModal }) => {
  return (
    <Modal shownModal={showModal} classNames="modal-search modal-padding">
      <div className="modal-search__container">
        <h3 className="text-header-h3">Gem søgning</h3>
        <div className="mt-48 color-secondary-gray">
          <p className="text-body-medium-regular">Navngiv din søgning</p>
        </div>
        <div className="modal-search__input mt-24">
          <input
            className="modal-search__input-element text-body-large"
            type="text"
            aria-label="Save your search results"
          />
        </div>
        <div className="modal-search__buttons mt-48">
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="gem"
            disabled={false}
            collapsible
          />
        </div>
      </div>
    </Modal>
  );
};
