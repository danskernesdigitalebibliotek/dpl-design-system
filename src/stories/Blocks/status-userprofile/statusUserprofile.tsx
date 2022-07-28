import ListEmpty from "../../Library/Lists/list-empty/ListEmpty";
import {
  ListDashboard,
  ListDashboardProps,
} from "../../Library/Lists/list-dashboard/ListDashboard";
import {
  LinkFilters,
  LinkFilter,
} from "../../Library/link-filters/LinkFilters";

export type StatusUserprofileProps = {
  loansTitle: LinkFilter[];
  loans: ListDashboardProps[];
  reservationsTitle: LinkFilter[];
  reservations: ListDashboardProps[];
};

export const StatusUserprofile = (props: StatusUserprofileProps) => {
  const { loansTitle, loans, reservationsTitle, reservations } = props;
  return (
    <div className="status-userprofile">
      <div className="status-userprofile__column">
        <LinkFilters filters={loansTitle} />

        {loans.length ? (
          loans.map((item, index) => (
            <div key={index} className="status-userprofile__loans-list-item">
              <ListDashboard
                title={item.title}
                number={item.number}
                label={item.label}
                showDot={item.showDot}
              />
            </div>
          ))
        ) : (
          <ListEmpty text="Du har i øjebilkket 0 fysiske lån" />
        )}
      </div>
      <div className="status-userprofile__column">
        <LinkFilters filters={reservationsTitle} />

        {reservations.length ? (
          reservations.map((item, index) => (
            <div
              key={index}
              className="status-userprofile__reservation-list-item"
            >
              <ListDashboard
                title={item.title}
                number={item.number}
                label={item.label}
                showDot={item.showDot}
              />
            </div>
          ))
        ) : (
          <ListEmpty text="Du har i øjebilkket 0 reserveringer" />
        )}
      </div>
    </div>
  );
};
