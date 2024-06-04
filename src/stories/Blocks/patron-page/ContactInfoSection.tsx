import React from "react";
import Input from "../../Library/Forms/input/Input";
import { Checkbox } from "../../Library/Forms/checkbox/Checkbox";

const ContactInfoSection: React.FC = () => {
  return (
    <section data-cy="patron-page-contact-info">
      <h2 className="text-header-h4 mt-64 mb-16">Contact information</h2>
      <p className="text-body-small-regular mb-32">
        Patron contact info body text
      </p>
      <Input label="Phone number" type="text" id="phone" description="" />
      <Checkbox
        label="Receive text messages about your loans, reservations, and so forth"
        isChecked={false}
        hiddenLabel={false}
        classNames="checkbox mt-8 mb-16"
      />
      <Input label="E-mail" type="text" id="email" description="" />
      <Checkbox
        label="Receive emails about your loans, reservations, and so forth"
        isChecked={false}
        hiddenLabel={false}
        classNames="checkbox mt-8 mb-16"
      />
    </section>
  );
};

export default ContactInfoSection;
