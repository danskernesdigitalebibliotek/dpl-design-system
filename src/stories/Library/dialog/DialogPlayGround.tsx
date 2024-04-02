import DialogContent1 from "./DialogContent1";
import DialogContent2 from "./DialogContent2";
import Dialog from "./Dialog";
import useDialog from "./useDialog";

const DialogPlayGround = () => {
  const { dialogContent, openDialogWithContent, closeDialog, dialogRef } =
    useDialog();

  return (
    <>
      <button
        className="btn-primary btn-outline btn-medium"
        onClick={() => {
          openDialogWithContent(<DialogContent1 />);
        }}
      >
        Open Dialog 1
      </button>
      <button
        className="btn-primary btn-outline btn-medium"
        onClick={() => {
          openDialogWithContent(<DialogContent2 />);
        }}
      >
        Open Dialog 2
      </button>

      <Dialog closeDialog={closeDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default DialogPlayGround;
