export type PatronInfoProps = {
  name: string;
  nameLabel: string;
  address: string;
  addressLabel: string;
};

const PatronInfo = (props: PatronInfoProps) => {
  const { name, nameLabel, address, addressLabel } = props;

  return (
    <div className="dpl-patron-info">
      <div className="dpl-patron-info__label">{nameLabel}</div>
      <div className="dpl-patron-info__text">{name}</div>
      <div className="dpl-patron-info__label">{addressLabel}</div>
      <div className="dpl-patron-info__text">{address}</div>
    </div>
  );
};

export default PatronInfo;
