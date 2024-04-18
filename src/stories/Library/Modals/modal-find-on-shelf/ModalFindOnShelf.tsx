import Disclosure from "../../disclosure/Disclosure";
import ListFindOnShelf from "../../Lists/list-find-on-shelf/ListFindOnShelf";
import Modal from "../Modal";
import { Dropdown } from "../../dropdown/Dropdown";

export type ModalFindOnShelfProps = {
  workTitle: string;
  author: string;
  nrOfbranches: number;
  nrOfManifestations: number;
  showModal: boolean;
  isPeriodical: boolean;
};

const ModalFindOnShelf: React.FC<ModalFindOnShelfProps> = ({
  workTitle,
  author,
  nrOfbranches,
  nrOfManifestations,
  showModal,
  isPeriodical,
}) => {
  const branchesArray = new Array(nrOfbranches).fill("item");
  const manifestationArray = new Array(nrOfManifestations).fill("item");

  return (
    <Modal
      shownModal={showModal}
      classNames="modal-details modal-find-on-shelf"
    >
      <h2 className="text-header-h2 modal-find-on-shelf__headline">
        {workTitle} / {author}
      </h2>
      {isPeriodical && (
        <div className="modal-find-on-shelf__periodical-dropdowns">
          <Dropdown
            ariaLabel="Choose periodical year"
            list={[
              { title: "2022", href: "" },
              { title: "2021", href: "" },
              { title: "2020", href: "" },
            ]}
            arrowIcon="chevron"
            classNames="dropdown--grey-borders"
            hideInputWrapper
          />
          <Dropdown
            ariaLabel="Choose periodical week"
            list={[
              { title: "40", href: "" },
              { title: "39", href: "" },
              { title: "38", href: "" },
              { title: "37", href: "" },
              { title: "36", href: "" },
            ]}
            arrowIcon="chevron"
            classNames="dropdown--grey-borders"
            hideInputWrapper
          />
        </div>
      )}
      <div className="text-small-caption modal-find-on-shelf__caption">
        8 biblioteker har materialet
      </div>
      {branchesArray.map((branchKey) => {
        return (
          <Disclosure
            headingLevel="h2"
            withAvailability
            fullWidth
            headline="Bibliotek filial navn"
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
    </Modal>
  );
};

export default ModalFindOnShelf;
