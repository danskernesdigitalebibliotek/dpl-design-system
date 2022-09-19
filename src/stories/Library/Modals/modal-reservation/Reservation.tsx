import ReservationError from "../../reservation/ReservationError";
import ReservationForm from "../../reservation/ReservationForm";
import ReservationHeader from "../../reservation/ReservationHeader";
import ReservationSucces from "../../reservation/ReservationSucces";
import { ModalCloseButton } from "../ModalShared";

interface ReservationProps {
  title: string;
  label: string;
  author: string;
  submitInfo: string;
  submitButton: string;
  state: "initial" | "success" | "error";
}

const Reservation = ({
  label,
  title,
  author,
  submitInfo,
  submitButton,
  state,
}: ReservationProps) => {
  if (state === "success")
    return (
      <div className="modal modal-show">
        <ModalCloseButton
          idAriaDescribedBy="describemodal"
          toggleModal={() => {}}
        />
        <ReservationSucces />
      </div>
    );
  if (state === "error")
    return (
      <div className="modal modal-show">
        <ModalCloseButton
          idAriaDescribedBy="describemodal"
          toggleModal={() => {}}
        />
        <ReservationError />;
      </div>
    );
  return (
    <div className="modal modal-show">
      <ModalCloseButton
        idAriaDescribedBy="describemodal"
        toggleModal={() => {}}
      />
      <section className="reservation-modal">
        <ReservationHeader author={author} label={label} title={title} />
        <ReservationForm submitInfo={submitInfo} submitButton={submitButton} />
      </section>
    </div>
  );
};

export default Reservation;
