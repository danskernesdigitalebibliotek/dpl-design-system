import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";
import Modal from "../Modal";

export type ModalLoginProps = {
  title: string;
  showModal: boolean;
};

export const ModalLogin: React.FC<ModalLoginProps> = ({ showModal }) => (
  <div className="modal-backdrop">
    <Modal
      shownModal={showModal}
      classNames="modal-login modal-login--anonymous  modal-right modal-padding"
      orientation="right"
    >
      <>
        <Button
          buttonType="default"
          size="large"
          variant="filled"
          label="Log ind"
          disabled={false}
          collapsible={false}
        />
        <Links
          href="/"
          linkText="Opret profil"
          classNames="color-secondary-gray modal-login__btn-create-profile mt-32"
        />
      </>
    </Modal>
  </div>
);
