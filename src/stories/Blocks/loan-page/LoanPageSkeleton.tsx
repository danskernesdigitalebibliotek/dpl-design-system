import ReservationListItemSkeleton from "../reservation-page/ReservationListItemSkeleton";

const LoanPageSkeleton: React.FC = () => {
  return (
    <section className="loan-list-page ssc">
      <div className="ssc-head-line w-60 mx-32 my-48" />
      <div className="ssc-head-line w-10 mx-32 mt-64 mb-35" />
      <ReservationListItemSkeleton />
      <ReservationListItemSkeleton />
      <div className="ssc-head-line w-10 mx-32 mt-80" />
      <ReservationListItemSkeleton />
      <ReservationListItemSkeleton />
    </section>
  );
};

export default LoanPageSkeleton;
