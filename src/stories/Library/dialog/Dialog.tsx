import clsx from "clsx";
import React, { forwardRef } from "react";

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
        <button
          type="button"
          onClick={closeDialog}
          className="dialog__close-button"
          aria-label="Close dialog"
        >
          <img src="/icons/basic/icon-cross.svg" alt="" />
        </button>
        {children}
      </dialog>
    );
  },
);
export default Dialog;
