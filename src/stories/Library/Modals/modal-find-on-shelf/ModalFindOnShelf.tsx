import { useEffect, useState } from "react";
import { Disclosure } from "../../disclosure/Disclosure";
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
    setShouldShowModal(!showModal);
  };

  console.log(shoudShowModal);

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
            <ul className="find-on-shelf">
              <li className="find-on-shelf__header-row text-small-caption">
                <span>Materiale</span>
                <span>Find det på hylden</span>
                <span>Hjemme</span>
              </li>
              {manifestationArray.map((manifestKey) => {
                return (
                  <li
                    className="find-on-shelf__row text-body-medium-regular"
                    key={manifestKey}
                  >
                    <span>Vejen til Jerusalem, 2008</span>
                    <span>Voksen · Skønlitteratur · Standard · Guillou</span>
                    <span>
                      12<span className="hide-on-desktop"> hjemme</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Disclosure>
        );
      })}
    </div>
  );
};

export default ModalFindOnShelf;
