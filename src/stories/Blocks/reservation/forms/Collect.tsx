import { FC } from "react";
import { Dropdown } from "../../../Library/dropdown/Dropdown";
import Form from "./Form";

// export interface UserDataProps {}

// const UserData: FC<UserDataProps> = ({}) => {
const Collect: FC = () => {
  return (
    <Form
      title="Afhentningsbibliotek"
      description={["Hvor ønsker du at afhente dine bøger?"]}
    >
      <Dropdown
        ariaLabel="Afheningsbibliotek"
        list={[
          { title: "Hovedbiblioteket i Birkerød", href: "" },
          { title: "Københavns hovedbibliotek", href: "" },
        ]}
        arrowIcon="chevron"
      />
    </Form>
  );
};

export default Collect;
