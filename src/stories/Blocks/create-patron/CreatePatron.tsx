import { Button } from "../../Library/Buttons/button/Button";
import DoubleInputRow from "../../Library/Forms/input/DoubleInputRow";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Links } from "../../Library/links/Links";

export interface CreatePatronProps {
  headline: string;
}

const CreatePatron: React.FC<CreatePatronProps> = ({ headline }) => {
  return (
    <div className="create-patron-page">
      <h1 className="create-patron-page__title">{headline}</h1>
      <form>
        <section className="create-patron-page__row">
          <DoubleInputRow leftLabel="Phone number*" rightLabel="Email*" />
        </section>
        <section className="create-patron-page__row">
          <DoubleInputRow leftLabel="New pin*" rightLabel="Confirm new pin*" />
        </section>
        <Dropdown
          ariaLabel="Choose pickup branch"
          arrowIcon="chevron"
          list={[
            { title: "Nothing selected" },
            { title: "Option 1" },
            { title: "Option 2" },
          ]}
          classNames="dropdown--grey-borders"
          labelComponent={
            <label className="text-body-medium-medium mb-8">
              Choose pickup branch*
            </label>
          }
          footnote="Choose preferred library for pickup of your future reservations."
        />
        <div className="create-patron-page__buttons">
          <Button
            buttonType="none"
            label="Create profile"
            size="small"
            variant="filled"
            classNames="mr-16"
          />
          <Links href="#" linkText="Cancel" classNames="mt-8" />
        </div>
      </form>
    </div>
  );
};

export default CreatePatron;
