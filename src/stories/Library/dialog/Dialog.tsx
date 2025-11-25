import clsx from "clsx";
import React, { forwardRef } from "react";
import { ReactComponent as CloseLarge } from "../../../public/icons/collection/CloseLarge.svg";

export type DialogType = {
  children: React.ReactNode;
  closeDialog: () => void;
  isSidebar?: boolean;
};

const Dialog = forwardRef<HTMLDialogElement, DialogType>(
  ({ children, closeDialog, isSidebar }, ref) => {
    return (
      <dialog
        className={clsx("dialog", isSidebar && "dialog--sidebar")}
        ref={ref}
        // Close dialog when clicking outside of it (::backdrop pseudo-element)
        onClick={({ currentTarget, target }) => {
          if (currentTarget === target) {
            closeDialog();
          }
        }}
      >
        <div className="dialog__top-bar">
          <button
            type="button"
            onClick={closeDialog}
            className="dialog__close-button"
            aria-label="Close dialog"
          >
            <CloseLarge />
          </button>
        </div>
        {children}
      </dialog>
    );
  },
);
export default Dialog;
