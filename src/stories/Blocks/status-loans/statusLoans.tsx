import {
  ProgressBar,
  ProgressBarProps,
} from "../../Library/progress-bar/progressBar";

export type LinkProps = {
  link: string;
  text: string;
};

export type StatusProps = {
  statusBars: ProgressBarProps[];
  title: string;
};

export type StatusLoansProps = {
  statusBarsData: StatusProps[];
  title: string;
  link: LinkProps;
  bread: string;
  reservationsText: string;
};

export const StatusLoans = (props: StatusLoansProps) => {
  const {
    statusBarsData,
    title: statusBarsTitle,
    link,
    bread,
    reservationsText,
  } = props;
  const { link: url, text: linkText } = link;

  return (
    <>
      <h2 className="text-header-h4 mt-64 mb-16">{statusBarsTitle}</h2>
      <div className="text-body-small-regular mb-8">
        {`${bread} `}
        <a href={url} className="text-links">
          {linkText}
        </a>
      </div>
      <div className="text-body-small-regular mt-8 mb-8">
        {reservationsText}
      </div>
      <div className="dpl-status mt-32">
        {statusBarsData.map(({ statusBars, title }) => (
          <div className="dpl-status-loans__container">
            <h3 className="text-small-caption">{title}</h3>
            {statusBars.map(
              ({ title: statusBarTitle, amount, fullAmount, outOf }) => (
                <ProgressBar
                  title={statusBarTitle}
                  fullAmount={fullAmount}
                  outOf={outOf}
                  amount={amount}
                />
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
};
