import ReservationError from "../../reservation/ReservationError";
import ReservationForm from "../../reservation/ReservationForm";
import ReservationHeader from "../../reservation/ReservationHeader";
import ReservationSucces from "../../reservation/ReservationSucces";
import Modal from "../Modal";

interface ReservationProps {
  title: string;
  label: string;
  author: string;
  submitInfo: string;
  submitButton: string;
  state: "initial" | "success" | "error";
  showPromoBar?: boolean;
  showInstantLoan: boolean;
  instantLoanTitle: string;
  instantLoanSubTitle: string;
  instantLoanUnderlineDescription: string;
  instantLoanBranchButton: string;
  instantLoanBranches: string[];
}

const Reservation = ({
  label,
  title,
  author,
  submitInfo,
  submitButton,
  state,
  showPromoBar,
  showInstantLoan,
  instantLoanTitle,
  instantLoanSubTitle,
  instantLoanUnderlineDescription,
  instantLoanBranchButton,
  instantLoanBranches,
}: ReservationProps) => {
  if (state === "success")
    return (
      <Modal shownModal>
        <ReservationSucces />
      </Modal>
    );
  if (state === "error")
    return (
      <Modal shownModal>
        <ReservationError />;
      </Modal>
    );
  return (
    <Modal shownModal>
      <section className="reservation-modal">
        <ReservationHeader author={author} label={label} title={title} />
        <ReservationForm
          submitInfo={submitInfo}
          submitButton={submitButton}
          showPromoBar={showPromoBar}
          showInstantLoan={showInstantLoan}
          instantLoanTitle={instantLoanTitle}
          instantLoanSubTitle={instantLoanSubTitle}
          instantLoanUnderlineDescription={instantLoanUnderlineDescription}
          instantLoanBranchButton={instantLoanBranchButton}
          instantLoanBranches={instantLoanBranches}
        />
      </section>
    </Modal>
  );
};

export default Reservation;
