import { useEffect, useState } from "react";
import { Disclosure } from "../../disclosure/Disclosure";
import ListFindOnShelf from "../../Lists/list-find-on-shelf/ListFindOnShelf";
import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";

export type ModalFindOnShelfProps = {
  workTitle: string;
  author: string;
  nrOfbranches: number;
  nrOfManifestations: number;
  showModal: boolean;
};

const ModalFindOnShelf: React.FC<ModalFindOnShelfProps> = ({
  workTitle,
  author,
  nrOfbranches,
  nrOfManifestations,
  showModal,
}) => {
  const branchesArray = new Array(nrOfbranches).fill("item");
  const manifestationArray = new Array(nrOfManifestations).fill("item");
  const [shoudShowModal, setShouldShowModal] = useState(showModal);

  useEffect(() => {
    setShouldShowModal(showModal);
  }, [showModal]);

  const toggleModal = () => {
    setShouldShowModal(!shoudShowModal);
  };

  if (!shoudShowModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div
      className={`modal modal-details modal-find-on-shelf ${
        shoudShowModal ? "modal-show" : ""
      }`}
    >
      <div className="modal__screen-reader-description" id="describemodal">
        Denne modal dækker sidens indhold, og er en demo
      </div>
      <ModalCloseButton
        idAriaDescribedBy="describemodal"
        toggleModal={toggleModal}
      />
      <h1 className="text-header-h2 modal-find-on-shelf__headline">
        {workTitle} / {author}
      </h1>
      <div className="text-small-caption modal-find-on-shelf__caption">
        8 biblioteker har materialet
      </div>
      {branchesArray.map((branchKey) => {
        return (
          <Disclosure
            withAvailability
            headline="Bibliotek fliale navn"
            icon="Various"
            key={branchKey}
          >
            <ListFindOnShelf
              manifestationName="Vejen til Jerusalem, 2008"
              location="Voksen · Skønlitteratur · Standard · Guillou"
              nrAvailable={13}
              nrOfListItems={manifestationArray.length}
            />
          </Disclosure>
        );
      })}
    </div>
  );
};

export default ModalFindOnShelf;
