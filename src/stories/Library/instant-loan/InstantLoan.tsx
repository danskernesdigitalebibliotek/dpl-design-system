import React from "react";
import DisclosureControllable from "../disclosure-controllable/DisclosureControllable";
import InstantLoanBranches from "./InstantLoanBranches";
import InstantLoanSummary from "./InstantLoanSummary";

type InstantLoanProps = Partial<{
  title: string;
  subTitle: string;
  underlineDescription: string;
  branches: string[];
  showDisclosureContent?: boolean;
}>;

const InstantLoan: React.FunctionComponent<InstantLoanProps> = ({
  title = "Hent bogen nu",
  subTitle = "Spring køen over og hent bogen nu på",
  underlineDescription = "Bogen er tilgængelig på disse biblioteker nær dig",
  branches = [
    "Blågaardens Bibliotek",
    "Østerbro Bibliotek",
    "Vesterbro Bibliotek",
  ],
  showDisclosureContent = false,
}) => (
  <DisclosureControllable
    showContent={showDisclosureContent}
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
    <InstantLoanBranches branches={branches} />
  </DisclosureControllable>
);

export default InstantLoan;
