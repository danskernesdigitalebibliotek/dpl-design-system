import ReservationError from "../../reservation/ReservationError";
import ReservationForm from "../../reservation/ReservationForm";
import ReservationHeader from "../../reservation/ReservationHeader";
import ReservationSucces from "../../reservation/ReservationSucces";
import ModalWrapper from "../ModalWrapper";

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
      <ModalWrapper shownModal>
        <ReservationSucces />
      </ModalWrapper>
    );
  if (state === "error")
    return (
      <ModalWrapper shownModal>
        <ReservationError />;
      </ModalWrapper>
    );
  return (
    <ModalWrapper shownModal>
      <section className="reservation-modal">
        <ReservationHeader author={author} label={label} title={title} />
        <ReservationForm submitInfo={submitInfo} submitButton={submitButton} />
      </section>
    </ModalWrapper>
  );
};

export default Reservation;
