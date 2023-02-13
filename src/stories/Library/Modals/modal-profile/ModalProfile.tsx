import { ModalHeader } from "../modal-header/ModalHeader";
import { Button } from "../../Buttons/button/Button";
import { LinkFilters, LinkFilter } from "../../link-filters/LinkFilters";
import {
  ListDashboard,
  ListDashboardProps,
} from "../../Lists/list-dashboard/ListDashboard";
import Modal from "../Modal";

export type ModalProfileProps = {
  showModal: boolean;
  headerName: string;
  headerLinkHref: string;
  headerLinkText: string;
  notifications: ListDashboardProps[];
  profileNavLinks: LinkFilter[];
};

export const ModalProfile: React.FC<ModalProfileProps> = ({
  showModal,
  headerName,
  headerLinkHref,
  headerLinkText,
  notifications,
  profileNavLinks,
}) => (
  <Modal
    shownModal={showModal}
    classNames="modal-profile modal-right"
    orientation="right"
  >
    <ModalHeader
      headerName={headerName}
      headerLinkHref={headerLinkHref}
      headerLinkText={headerLinkText}
    />

    <div className="modal-profile__notifications">
      {notifications.map((item, index) => (
        <div key={index} className="modal-profile__notification-item">
          <ListDashboard
            title={item.title}
            number={item.number}
            label={item.label}
            showDot={item.showDot}
            href={item.href}
          />
        </div>
      ))}
    </div>

    <div className="modal-profile__container">
      <div className="modal-profile__links">
        <LinkFilters filters={profileNavLinks} />
      </div>
      <div className="modal-profile__btn-logout">
        <Button
          buttonType="default"
          size="medium"
          variant="filled"
          label="Log ud"
          disabled={false}
          collapsible={false}
        />
      </div>
    </div>
  </Modal>
);

export default ModalProfile;
