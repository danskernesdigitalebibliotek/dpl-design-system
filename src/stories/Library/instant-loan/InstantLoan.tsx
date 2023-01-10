import React from "react";
import DisclosureControllable from "../disclosure-controllable/DisclosureControllable";
import InstantLoanBranches from "./InstantLoanBranches";
import InstantLoanSummary from "./InstantLoanSummary";

type InstantLoanProps = {
  title: string;
  subTitle: string;
  underlineDescription: string;
  InstantLoanBranchButton: string;
  instantLoanBranches: string[];
};

const InstantLoan: React.FunctionComponent<InstantLoanProps> = ({
  title,
  subTitle,
  underlineDescription,
  InstantLoanBranchButton,
  instantLoanBranches,
}) => (
  <DisclosureControllable
    showContent
    id="instant-loan"
    detailsClassName="instant-loan pagefold-parent--small"
    summaryClassName="instant-loan-summary cursor-pointer p-24"
    summary={
      <InstantLoanSummary
        title={title}
        subTitle={subTitle}
        underlineDescription={underlineDescription}
      />
    }
  >
    <InstantLoanBranches
      branches={instantLoanBranches}
      InstantLoanBranchButton={InstantLoanBranchButton}
    />
  </DisclosureControllable>
);

export default InstantLoan;
