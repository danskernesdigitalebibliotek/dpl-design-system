export type ListFindOnShelfProps = {
  manifestationName: string;
  location: string;
  nrAvailable: number;
};

const ListFindOnShelf: React.FC<ListFindOnShelfProps> = ({
  manifestationName,
  location,
  nrAvailable,
}) => {
  return (
    <ul className="find-on-shelf">
      <li className="find-on-shelf__header-row text-small-caption">
        <span>Materiale</span>
        <span>Find det på hylden</span>
        <span>Hjemme</span>
      </li>
      <li className="find-on-shelf__row text-body-medium-regular">
        <span>{manifestationName}</span>
        <span>{location}</span>
        <span>
          {nrAvailable}
          <span className="hide-on-desktop"> hjemme</span>
        </span>
      </li>
    </ul>
  );
};

export default ListFindOnShelf;
