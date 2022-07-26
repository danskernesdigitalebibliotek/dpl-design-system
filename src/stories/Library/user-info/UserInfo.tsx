export type UserInfoProps = {
  name: string;
  nameLabel: string;
  address: string;
  addressLabel: string;
};

const UserInfo = (props: UserInfoProps) => {
  const { name, nameLabel, address, addressLabel } = props;

  return (
    <div className="dpl-user-info">
      <div className="dpl-user-info__label">{nameLabel}</div>
      <div className="dpl-user-info__text">{name}</div>
      <div className="dpl-user-info__label">{addressLabel}</div>
      <div className="dpl-user-info__text">{address}</div>
    </div>
  );
};

export default UserInfo;
