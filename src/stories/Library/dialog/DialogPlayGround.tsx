import DialogContent from "./DialogContent";
import Dialog from "./Dialog";
import useDialog from "./useDialog";
import OpeningHoursForm from "../opening-hours-editor/OpeningHoursForm";

const DialogPlayGround = () => {
  const { dialogContent, openDialogWithContent, closeDialog, dialogRef } =
    useDialog();

  return (
    <>
      <button
        className="btn-primary btn-outline btn-medium"
        onClick={() => {
          openDialogWithContent(<DialogContent />);
        }}
      >
        Open Dialog 1
      </button>
      <button
        className="btn-primary btn-outline btn-medium"
        onClick={() => {
          openDialogWithContent(<OpeningHoursForm />);
        }}
      >
        Open Dialog 2 (OpeningHoursForm)
      </button>

      <Dialog closeDialog={closeDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default DialogPlayGround;
