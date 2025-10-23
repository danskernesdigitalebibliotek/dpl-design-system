import DawaInput from "../../Library/Forms/dawa-input/DawaInput";
import { ReactComponent as LocationSvg } from "../../../public/icons/collection/Location.svg";
import { ReactComponent as WarningSvg } from "../../../public/icons/basic/icon-warning.svg";

function FindLibraryDialog() {
  return (
    <div className="find-library-dialog">
      <p className="find-library-dialog__title">Find dit nærmeste bibliotek</p>
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
            Årh nej. Der er sket en fejl i afstandsmåleren. Prøv at reloade
            siden eller indtast adressen forfra.
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
  );
}

export default FindLibraryDialog;
