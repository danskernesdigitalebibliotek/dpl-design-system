import iconsCollection from "./icon-collection.json";

export const IconCollection = () => {
  return (
    <div className="internal-container-grid">
      {iconsCollection.map((i) => (
        <div className="internal-center">
          <img src={`icons/collection/${i.fileName}`} alt={i.title} />
          <span className="text-body-medium-regular">{i.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IconCollection;
