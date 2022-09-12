import { FC } from "react";
import Input from "../../../Library/Forms/input/Input";
import Form from "./Form";

const Email: FC = () => {
  return (
    <Form
      title="Ændring af email"
      description={[
        "Hvis du ønsker at få notifikationer på e-mail kan du indtaste eller ændre den ønskede e-mail hér.",
      ]}
    >
      <Input description="Indtast e-mail" id="id" label="E-mail" type="text" />
    </Form>
  );
};

export default Email;
