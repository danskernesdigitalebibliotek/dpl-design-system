import FeeListItemSkeleton from "./FeeListItemSkeleton";

const FeeListSkeleton: React.FC = () => {
  return (
    <section className="ssc fee-list">
      <h2 className="dpl-list-buttons__header">
        <div className="ssc-head-line w-20 mt-10" />
      </h2>
      <FeeListItemSkeleton />
      <FeeListItemSkeleton />
      <div className="ssc-head-line w-20 mt-48" />
      <FeeListItemSkeleton />
      <FeeListItemSkeleton />
    </section>
  );
};

export default FeeListSkeleton;
