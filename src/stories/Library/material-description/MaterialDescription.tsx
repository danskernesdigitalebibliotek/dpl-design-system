import SeriesLine from "../material-series-line/MaterialSeriesLine";

const seriesLines = [
  {
    title: "Nr. 3",
    subTitle: "i serien",
    linkList: [
      {
        text: "Vejen til Jerusalem",
        url: "/",
      },
    ],
  },
  {
    title: "I samme serie",

    linkList: [
      {
        text: "Tempelridderen",
        url: "/",
      },
      {
        text: "Riget ved vejens ende",
        url: "/",
      },
      {
        text: "Arven efter Arn",
        url: "/",
      },
    ],
  },
  {
    title: "Emneord",
    linkList: [
      {
        text: "Sverige",
        url: "/",
      },
      {
        text: "historie",
        url: "/",
      },
      {
        text: "klosterliv",
        url: "/",
      },
      {
        text: "korstogene",
        url: "/",
      },
      {
        text: "middelalderen",
        url: "/",
      },
    ],
  },
].map((item) => <SeriesLine {...item} />);

interface MaterialDescriptionProps {
  description?: string;
}

const MaterialDescription: React.FC<MaterialDescriptionProps> = ({
  description,
}) => {
  return (
    <section className="material-description">
      <h2 className="text-header-h4 pb-24">Beskrivelse</h2>
      <p className="text-body-large ">{description}</p>
      <div className="material-description__links mt-32">{seriesLines}</div>
    </section>
  );
};

export default MaterialDescription;
