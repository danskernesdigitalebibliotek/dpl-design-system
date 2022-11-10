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
};

export const StatusLoans = (props: StatusLoansProps) => {
  const { statusBarsData, title: statusBarsTitle, link, bread } = props;
  const { link: url, text: linkText } = link;

  return (
    <>
      <h1 className="text-header-h1 m-8">{statusBarsTitle}</h1>
      <div className="m-8 text-body-small-regular">
        {`${bread} `}
        <a href={url} className="text-links">
          {linkText}
        </a>
      </div>
      <div className="dpl-status-loans">
        {statusBarsData.map(({ statusBars, title }) => (
          <div className="dpl-status-loans__container m-8">
            <h2 className="text-header-h2">{title}</h2>
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
