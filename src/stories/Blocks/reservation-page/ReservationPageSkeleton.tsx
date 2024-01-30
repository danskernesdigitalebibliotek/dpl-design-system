import ReservationListItemSkeleton from "./ReservationListItemSkeleton";

const ReservationPageSkeleton: React.FC = () => {
  return (
    <section className="reservation-list-page ssc">
      <div className="ssc-head-line w-60 mx-32 my-48" />
      <div className="ssc-square w-90 ml-32 my-32" />
      <div className="ssc-head-line w-10 mx-32 mt-48" />
      <ReservationListItemSkeleton />
      <ReservationListItemSkeleton />
      <div className="ssc-head-line w-10 mx-32 mt-80" />
      <ReservationListItemSkeleton />
      <ReservationListItemSkeleton />
      <div className="ssc-head-line w-10 mx-32 mt-80" />
      <ReservationListItemSkeleton />
      <ReservationListItemSkeleton />
    </section>
  );
};

export default ReservationPageSkeleton;
