import { ButtonUI } from "../stories/button-ui/ButtonUI";
import { Button } from "../stories/button/Button";

export function InvalidProps() {
  return <h1>Invalid props</h1>;
}

export function ModalFallbackButton({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  return (
    <div className="modal-btn-fallback">
      <Button
        buttonType="default"
        size="large"
        variant="filled"
        label="Show modal"
        disabled={false}
        collapsible={true}
        onClick={toggleModal}
      />
    </div>
  );
}

export function ModalCloseButton({ toggleModal }: { toggleModal: () => void }) {
  return (
    <ButtonUI
      onClick={toggleModal}
      classes="modal-btn-close"
      ariaLabel="close modal"
      content={{
        kind: "ICON",
        alt: "close modal button",
        url: "icons/collection/CloseLarge.svg",
      }}
    />
  );
}
