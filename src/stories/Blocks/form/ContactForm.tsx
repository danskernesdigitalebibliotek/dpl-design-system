import React from "react";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import Textarea from "../../Library/Forms/textarea/Textarea";
import Input from "../../Library/Forms/input/Input";
import Label from "../../Library/Forms/label/Label";
import { Links } from "../../Library/links/Links";
import SubmitButton from "../../Library/Forms/submit-button/SubmitButton";

export interface ContactFormProps {
  title: string;
  subtitle: string;
  withoutSubtitle?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  subtitle,
  withoutSubtitle = false,
}) => {
  return (
    <div className="dpl-form">
      <div className="dpl-form__header">
        <h1 className="dpl-form__title">{title}</h1>
        {!withoutSubtitle && <p className="dpl-form__subtitle">{subtitle}</p>}
      </div>
      <section>
        <div className="dpl-form__body">
          <form>
            <Input id="name" type="text" label="Your name" />
            <Input id="email" type="text" label="Your email" />
            <Dropdown
              labelComponent={<Label id="category">Category</Label>}
              ariaLabel="select category"
              arrowIcon="chevron"
              innerClassNames={{
                select: "dropdown__select--grey",
                arrowWrapper: "dropdown__arrows--grey",
              }}
              list={[
                { title: "Option 1" },
                { title: "Option 2" },
                { title: "Option 3" },
              ]}
            />
            <Input id="subject" type="text" label="Subject" />
            <Textarea id="message" name="message" label="Message" />
            <SubmitButton buttonText="Send message" />
            <p className="dpl-form__info-message">
              BEMÆRK!: Indsæt aldrig CPR-nummer eller følsomme oplysninger i
              formularen. Læs mere om{" "}
              <Links
                href=""
                target="_blank"
                linkText="behandlingen af persondata i vores privatlivspolitik"
                excludeLinkTagClass
              />
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
