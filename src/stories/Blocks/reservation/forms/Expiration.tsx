import { FC } from "react";
import { Dropdown } from "../../../Library/dropdown/Dropdown";
import Form from "./Form";

const Expiration: FC = () => {
  return (
    <Form
      title="Har ingen interesse efter"
      description={[
        "Her kan du angive, hvor længe du har interesse i at vente på bøgerne.",
        "Når perioden er udløbet, vil reservationen ophøre.",
      ]}
    >
      <Dropdown
        ariaLabel="Har ingen interesse efter"
        list={[
          { title: "1 måned", href: "" },
          { title: "2 måneder", href: "" },
          { title: "3 måneder", href: "" },
          { title: "6 måneder", href: "" },
          { title: "12 måneder", href: "" },
        ]}
        arrowIcon="chevron"
      />
    </Form>
  );
};

export default Expiration;
