import AvailabilityLabel from "../availability-label/AvailabilityLabel";

type InstantLoanBranchesProps = {
  branches: string[];
};

const InstantLoanBranches: React.FunctionComponent<
  InstantLoanBranchesProps
> = ({ branches }) => {
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
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InstantLoanBranches;
