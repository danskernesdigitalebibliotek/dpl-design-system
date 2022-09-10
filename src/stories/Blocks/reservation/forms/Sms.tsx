import { FC } from "react";
import Input from "../../../Library/Forms/input/Input";
import Form from "./Form";

const Sms: FC = () => {
  return (
    <Form
      title="Ændring af telefonnummer"
      description={[
        "Hvis du ønsker at få notifikationer på sms kan du indtaste eller ændre dit telefonnummer hér.",
      ]}
    >
      <Input
        description="Indtast telefonnummer"
        id="id"
        label="Telefonnummer"
        type="text"
        validation="Det indtastede telefonnummer er ikke validt"
      />
    </Form>
  );
};

export default Sms;
