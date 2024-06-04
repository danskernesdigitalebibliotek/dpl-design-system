import FeeListHeader from "./FeeListHeader";
import PaymentInformation from "./PaymentInformation";
import FeeList from "./FeeList";
import FeeListSkeleton from "./FeeListSkeleton";

export interface FeeListPageProps {
  skeletonVersion?: boolean;
}

const FeeListPage: React.FC<FeeListPageProps> = ({ skeletonVersion }) => {
  return (
    <div className="fee-list-page" data-cy="fee-list-page">
      <FeeListHeader />
      <PaymentInformation />
      {skeletonVersion ? <FeeListSkeleton /> : <FeeList />}
    </div>
  );
};

export default FeeListPage;
