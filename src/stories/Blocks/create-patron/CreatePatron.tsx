import { Button } from "../../Library/Buttons/button/Button";
import DawaInput from "../../Library/Forms/dawa-input/DawaInput";
import DoubleInputRow from "../../Library/Forms/input/DoubleInputRow";
import Dialog from "../../Library/dialog/Dialog";
import useDialog from "../../Library/dialog/useDialog";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Links } from "../../Library/links/Links";
import LibrarySelect from "../library-select/LibrarySelect";
import { ReactComponent as LocationSvg } from "../../../public/icons/collection/Location.svg";
import { ReactComponent as WarningSvg } from "../../../public/icons/basic/icon-warning.svg";

export interface CreatePatronProps {
  headline: string;
}

const CreatePatron: React.FC<CreatePatronProps> = ({ headline }) => {
  const { dialogContent, openDialogWithContent, closeDialog, dialogRef } =
    useDialog();

  return (
    <div className="create-patron-page">
      <h1 className="create-patron-page__title">{headline}</h1>
      <form>
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
        <Dropdown
          ariaLabel="Choose pickup branch"
          arrowIcon="chevron"
          list={[
            { title: "Nothing selected" },
            { title: "Option 1" },
            { title: "Option 2" },
          ]}
          classNames="dropdown--grey-borders"
          labelComponent={
            <label className="text-body-medium-medium mb-8">
              Choose pickup branch*
            </label>
          }
          footnote="Choose preferred library for pickup of your future reservations."
        />

        <LibrarySelect
          label="Choose library*"
          id="library-select"
          description="Select the library you want to borrow from."
          validation="Please select a library*"
        />

        <LibrarySelect
          label="Choose library*"
          id="library-select"
          selectedLibrary={{
            name: "Blågårdens Bibliotek",
            street: "Blågårds Plads 5",
            city: "2200 København N",
          }}
          description="Select the library you want to borrow from."
          validation="Please select a library*"
          onClickCallback={() => openDialogWithContent(<div>Library List</div>)}
        />

        <Dialog isSidebar closeDialog={closeDialog} ref={dialogRef}>
          <div className="find-library-dialog">
            <p className="find-library-dialog__title">
              Find dit nærmeste bibliotek
            </p>
            <div className="find-library-dialog__location-group">
              <DawaInput
                id="address-input"
                label="Indtast din adresse"
                placeholder="Fx Torvegade 1, 1401 København K"
                type="text"
                classNames="dawa-input"
              />
              <button className="find-library-dialog__location">
                <LocationSvg />
                <p>Find nærmeste bibliotek ud fra din lokation</p>
              </button>
              <div className="find-library-dialog__error-message">
                <WarningSvg />
                <p>
                  Årh nej. Der er sket en fejl i afstandsmåleren. Prøv at
                  reloade siden eller indtast adressen forfra.
                </p>
              </div>
            </div>
            <div className="find-library-dialog__location-list">
              <p className="find-library-dialog__location-list__title">
                Vælg bibliotek
              </p>
              <button className="find-library-dialog__location-list__item">
                <div>
                  <p className="find-library-dialog__location-list__item__name">
                    Biblioteket Rentemestervej
                  </p>
                  <div className="find-library-dialog__location-list__item__address">
                    <p>Rentemestervej 1</p>
                    <p>2400 København NV</p>
                  </div>
                </div>
                <p className="find-library-dialog__location-list__item__distance">
                  0,1 km
                </p>
              </button>
              <button className="find-library-dialog__location-list__item find-library-dialog__location-list__item--selected">
                <div>
                  <p className="find-library-dialog__location-list__item__name">
                    Biblioteket Rentemestervej
                  </p>
                  <div className="find-library-dialog__location-list__item__address">
                    <p>Rentemestervej 1</p>
                    <p>2400 København NV</p>
                  </div>
                </div>
                <p className="find-library-dialog__location-list__item__distance">
                  0,1 km
                </p>
              </button>
            </div>
          </div>
        </Dialog>

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
