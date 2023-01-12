import { ButtonUI } from "../Buttons/button-ui/ButtonUI";
import { Button } from "../Buttons/button/Button";

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
        collapsible
        onClick={toggleModal}
      />
    </div>
  );
}

export function ModalCloseButton({
  toggleModal,
  idAriaDescribedBy,
}: {
  toggleModal: void | (() => void);
  idAriaDescribedBy: string;
}) {
  return (
    <ButtonUI
      describe={idAriaDescribedBy}
      onClick={toggleModal || (() => {})}
      classes="modal-btn-close animate__animated animate__slide-in-down animate__delay-1s"
      ariaLabel="close modal"
      content={{
        kind: "ICON",
        alt: "close modal button",
        url: "icons/collection/CloseLarge.svg",
      }}
    />
  );
}
