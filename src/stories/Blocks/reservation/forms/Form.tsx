import * as React from "react";
import { FC } from "react";
import { Button } from "../../../Library/Buttons/button/Button";

export interface UserDataProps {
  title: string;
  description: string[];
  children?: React.ReactNode;
}

const Form: FC<UserDataProps> = ({ title, description, children }) => {
  return (
    <section className="reservation-modal reservation-form">
      <div className="reservation-form__content">
        <div className="reservation-form__header">
          <h3 className="text-header-h3 mb-35">{title}</h3>
          {description.map((paragraph) => (
            <p className="text-body-large">{paragraph}</p>
          ))}
        </div>
        {children && (
          <div className="reservation-form__body mt-35">{children}</div>
        )}
        <div className="reservation-form__footer mt-48">
          <Button
            label="Gem"
            buttonType="none"
            disabled={false}
            collapsible={false}
            size="xlarge"
            variant="filled"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
