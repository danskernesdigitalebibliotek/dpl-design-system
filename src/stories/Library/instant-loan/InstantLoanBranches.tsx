import AvailabilityLabel from "../availability-label/AvailabilityLabel";

type InstantLoanBranchesProps = {
  branches: string[];
  InstantLoanBranchButton: string;
};

const InstantLoanBranches: React.FunctionComponent<
  InstantLoanBranchesProps
> = ({ branches, InstantLoanBranchButton }) => {
  return (
    <ul className="instant-loan-branches">
      {branches.map((branch) => (
        <li>
          <div className="instant-loan-branch cursor-pointer px-24">
            <p className="text-header-h5">{branch}</p>
            <AvailabilityLabel
              manifestationType="Bog"
              availability="Hjemme"
              status="available"
              quantity={8}
            />
            <button className="link-tag text-small-caption instant-loan-branch__show-on-map">
              {InstantLoanBranchButton}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InstantLoanBranches;
