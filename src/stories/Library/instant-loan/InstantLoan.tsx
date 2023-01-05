import React from "react";
import AvailabilityLabel from "../availability-label/AvailabilityLabel";
import { Cover } from "../cover/Cover";

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
  <details className="instant-loan pagefold-parent--small">
    <summary className="instant-loan-summary cursor-pointer p-24">
      <div className="pagefold-triangle--small" />
      <Cover
        url="images/book_cover_3.jpg"
        size="small"
        animate={false}
        tint="120"
      />
      <div>
        <h2 className="text-header-h4 mt-22 mb-4">{title}</h2>
        <p className="text-small-caption">{subTitle}</p>
        <div className="instant-loan-underline mt-35">
          <p className="link-tag text-small-caption">{underlineDescription}</p>
          <img
            className="instant-loan-arrow"
            src="icons/collection/ExpandMore.svg"
            alt="various-icon"
          />
        </div>
      </div>
    </summary>

    <ul className="instant-loan-branches">
      {instantLoanBranches.map((branch) => (
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
  </details>
);

export default InstantLoan;
