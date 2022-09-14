import { Dropdown } from "../../../Library/dropdown/Dropdown";
import Form from "./Form";

const Collect = () => (
  <Form
    title="Afhentningsbibliotek"
    description={["Hvor ønsker du at afhente dine bøger?"]}
  >
    <Dropdown
      ariaLabel="Afheningsbibliotek"
      list={[
        { title: "Hovedbiblioteket, Krystalgade", href: "" },
        { title: "Blågårdens Bibliotek", href: "" },
        { title: "Brønshøj Bibliotek", href: "" },
        { title: "Christianshavns Bibliotek", href: "" },
        { title: "Husum Bibliotek", href: "" },
        { title: "Islands Brygge Bibliotek", href: "" },
        { title: "Øbro Jagtvej Bibliotek", href: "" },
        { title: "Biblioteket Rentemestervej", href: "" },
        { title: "Nørrebro Bibliotek", href: "" },
        { title: "Solvang Bibliotek", href: "" },
        { title: "Sundby Bibliotek", href: "" },
        { title: "Bibliotekshuset", href: "" },
        { title: "Sydhavnens Bibliotek", href: "" },
        { title: "Tingbjerg Bibliotek", href: "" },
        { title: "Valby Bibliotek", href: "" },
        { title: "Kulturstationen Vanløse. Biblioteket", href: "" },
        { title: "Vesterbro Bibliotek", href: "" },
        { title: "Vigerslev Bibliotek", href: "" },
        { title: "Østerbro Bibliotek", href: "" },
        { title: "Ørestad Bibliotek", href: "" },
      ]}
      arrowIcon="chevron"
    />
  </Form>
);

export default Collect;
