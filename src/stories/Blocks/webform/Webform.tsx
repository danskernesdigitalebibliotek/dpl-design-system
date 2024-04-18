import React from "react";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Button } from "../../Library/Buttons/button/Button";
import Textarea from "../../Library/Forms/textarea/Textarea";
import Input from "../../Library/Forms/input/Input";
import Label from "../../Library/Forms/label/Label";
import { Links } from "../../Library/links/Links";

export interface WebformProps {
  title: string;
  subtitle: string;
  withoutSubtitle?: boolean;
}

const Webform: React.FC<WebformProps> = ({
  title,
  subtitle,
  withoutSubtitle = false,
}) => {
  return (
    <div className="webform">
      <div className="webform__header">
        <h1 className="webform__title">{title}</h1>
        {!withoutSubtitle && <p className="webform__subtitle">{subtitle}</p>}
      </div>
      <section className="paragraph">
        <div className="paragraphs__item paragraphs__item--webform webform__form">
          <form className="webform-submission-form">
            <Input id="edit-name" type="text" label="Your name" />
            <Input id="edit-email" type="text" label="Your email" />
            <Dropdown
              labelComponent={<Label id="edit-category">Category</Label>}
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
            <Input id="edit-subject" type="text" label="Subject" />
            <Textarea id="edit-message" name="message" label="Message" />
            <Button
              buttonType="none"
              label="Send message"
              size="small"
              variant="filled"
              classNames="mt-48 mb-22"
            />
            <p className="webform__info-message">
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

export default Webform;
