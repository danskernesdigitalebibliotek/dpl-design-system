import React, { forwardRef } from "react";

export type DialogType = {
  children: React.ReactNode;
  closeDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, DialogType>(
  ({ children, closeDialog }, ref) => {
    return (
      <dialog
        className="dialog"
        ref={ref}
        // Close dialog when clicking outside of it (::backdrop pseudo-element)
        onClick={({ currentTarget, target }) => {
          if (currentTarget === target) {
            closeDialog();
          }
        }}
      >
        <button
          type="button"
          onClick={closeDialog}
          className="dialog__close-button"
        >
          <img src="/icons/basic/icon-cross.svg" alt="close icon" />
        </button>
        {children}
      </dialog>
    );
  }
);
export default Dialog;
