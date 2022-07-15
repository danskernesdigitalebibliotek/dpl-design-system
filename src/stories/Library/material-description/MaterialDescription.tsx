import HorizontalTermLine from "../horizontal-term-line/HorizontalTermLine";

const HorizontalTermLines = [
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
].map((item) => <HorizontalTermLine {...item} />);

interface MaterialDescriptionProps {
  description?: string;
}

const MaterialDescription: React.FC<MaterialDescriptionProps> = ({
  description,
}) => {
  return (
    <section className="material-description">
      <h2 className="text-header-h4 pb-24">Beskrivelse</h2>
      <p className="text-body-large material-description__content">
        {description}
      </p>
      <div className="material-description__links mt-32">
        {HorizontalTermLines}
      </div>
    </section>
  );
};

export default MaterialDescription;
