import { Button } from "../../Library/Buttons/button/Button";
import DoubleInputRow from "../../Library/Forms/input/DoubleInputRow";
import Dialog from "../../Library/dialog/Dialog";
import useDialog from "../../Library/dialog/useDialog";
import { Links } from "../../Library/links/Links";
import FindLibraryDialog from "../find-library-dialog/FindLibraryDialog";

import LibrarySelect from "../library-select/LibrarySelect";

export interface CreatePatronProps {
  headline: string;
}

const CreatePatron: React.FC<CreatePatronProps> = ({ headline }) => {
  const { dialogContent, openDialogWithContent, closeDialog, dialogRef } =
    useDialog();

  return (
    <div className="create-patron-page">
      <h1 className="create-patron-page__title">{headline}</h1>
      <form className="create-patron-page__form">
        <section className="create-patron-page__row">
          <DoubleInputRow leftLabel="Phone number*" rightLabel="Email*" />
        </section>
        <section className="create-patron-page__row">
          <DoubleInputRow
            leftLabel="New pin*"
            rightLabel="Confirm new pin*"
            descriptionLeft="Exactly 4 digits"
            descriptionRight="Exactly 4 digits"
            validationRight="Pin doesn't match"
          />
        </section>
        <section className="create-patron-page__row">
          <LibrarySelect
            label="Choose library*"
            id="library-select"
            description="Select the library you want to borrow from."
            validation="Please select a library*"
            onClickCallback={() => openDialogWithContent(<FindLibraryDialog />)}
          />

          <Dialog isSidebar closeDialog={closeDialog} ref={dialogRef}>
            {dialogContent}
          </Dialog>
        </section>

        <div className="create-patron-page__buttons">
          <Button
            buttonType="none"
            label="Create profile"
            size="small"
            variant="filled"
            classNames="mr-16"
          />
          <Links href="#" linkText="Cancel" classNames="mt-8" />
        </div>
      </form>
    </div>
  );
};

export default CreatePatron;
