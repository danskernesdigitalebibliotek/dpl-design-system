import { Cover } from "../cover/Cover";

type InstantLoanSummaryProps = {
  title: string;
  subTitle: string;
  underlineDescription: string;
};

const InstantLoanSummary: React.FunctionComponent<InstantLoanSummaryProps> = ({
  title,
  subTitle,
  underlineDescription,
}) => (
  <>
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
  </>
);

export default InstantLoanSummary;
