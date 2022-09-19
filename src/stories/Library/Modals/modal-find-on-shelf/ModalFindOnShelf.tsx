import { useEffect, useState } from "react";
import { Disclosure } from "../../disclosure/Disclosure";
import ListFindOnShelf from "../../Lists/list-find-on-shelf/ListFindOnShelf";
import { ModalFallbackButton } from "../ModalShared";
import ModalWrapper from "../ModalWrapper";

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
    <ModalWrapper
      shownModal={shoudShowModal}
      classNames="modal-details modal-find-on-shelf"
      toggleModal={toggleModal}
    >
      <h2 className="text-header-h2 modal-find-on-shelf__headline">
        {workTitle} / {author}
      </h2>
      <div className="text-small-caption modal-find-on-shelf__caption">
        8 biblioteker har materialet
      </div>
      {branchesArray.map((branchKey) => {
        return (
          <Disclosure
            withAvailability
            fullWidth
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
    </ModalWrapper>
  );
};

export default ModalFindOnShelf;
