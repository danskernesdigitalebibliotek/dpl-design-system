import PatronInfoSkeleton from "../../Library/patron-info/PatronInfoSkeleton";
import ContactInfoSection from "./ContactInfoSection";

const PatronPageSkeleton: React.FC = () => {
  return (
    <form className="dpl-patron-page">
      <h1 className="text-header-h1 my-32">Patron profile page</h1>
      <h2 className="text-header-h4 mt-32 mb-16">Basic details</h2>
      <PatronInfoSkeleton />
      <ContactInfoSection />
    </form>
  );
};

export default PatronPageSkeleton;
