export type ListFindOnShelfProps = {
  manifestationName: string;
  location: string;
  nrAvailable: number;
  nrOfListItems: number;
};

const ListFindOnShelf: React.FC<ListFindOnShelfProps> = ({
  manifestationName,
  location,
  nrAvailable,
  nrOfListItems,
}) => {
  const numberArray = new Array(nrOfListItems).fill("item");

  return (
    <ul className="find-on-shelf">
      <li className="find-on-shelf__header-row text-small-caption">
        <span className="find-on-shelf__material-header">Materiale</span>
        <span className="find-on-shelf__location-header">
          Find det på hylden
        </span>
        <span className="find-on-shelf__item-count-header">Hjemme</span>
      </li>
      {numberArray.map((key) => {
        return (
          <li className="find-on-shelf__row text-body-medium-regular" key={key}>
            <span className="find-on-shelf__material-text">
              {manifestationName}
            </span>
            <span>{location}</span>
            <span className="find-on-shelf__item-count-text">
              {nrAvailable}
              <span className="hide-visually--on-desktop"> hjemme</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListFindOnShelf;
