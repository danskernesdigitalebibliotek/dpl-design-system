import { Status, StatusProps } from "../../Library/status/status";

export type LinkProps = {
  link: string;
  text: string;
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
  console.log(statusBarsData);
  return (
    <div className="dpl-status-loans">
      <h1 className="text-header-h1 m-8">{statusBarsTitle}</h1>
      <div className="m-8 text-body-small-regular">
        {`${bread} `}
        <a href={url} className="text-links">
          {linkText}
        </a>
      </div>
      <div className="dpl-status-loans__column">
        {statusBarsData.map(({ statusBars, title }) => (
          <Status title={title} statusBars={statusBars} />
        ))}
      </div>
    </div>
  );
};
