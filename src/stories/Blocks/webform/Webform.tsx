import React from "react";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Button } from "../../Library/Buttons/button/Button";

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
            <div className="dpl-input">
              <label htmlFor="edit-name" className="input-label">
                Your name
              </label>
              <input
                type="text"
                id="edit-name"
                className="form-text required"
              />
            </div>
            <div className="dpl-input">
              <label htmlFor="edit-email" className="input-label">
                Your email
              </label>
              <input
                type="text"
                id="edit-email"
                className="form-email required"
              />
            </div>
            <div className="dpl-input">
              <label htmlFor="edit-category" className="input-label">
                Category
              </label>
              <Dropdown
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
            </div>
            <div className="dpl-input">
              <label htmlFor="edit-subject" className="input-label">
                Subject
              </label>
              <input
                type="text"
                id="edit-subject"
                className="form-text required"
              />
            </div>
            <div className="dpl-input">
              <label htmlFor="edit-message" className="input-label">
                Message
              </label>
              <div>
                <textarea
                  id="edit-message"
                  name="message"
                  rows={8}
                  cols={60}
                  className="form-textarea required"
                />
              </div>
            </div>
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
              <a href="" target="_blank" className="text-links">
                behandlingen af persondata i vores privatlivspolitik
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Webform;
