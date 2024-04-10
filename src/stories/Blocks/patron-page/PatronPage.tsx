import React from "react";
import PatronInfo from "../../Library/patron-info/PatronInfo";
import Input from "../../Library/Forms/input/Input";
import { Checkbox } from "../../Library/Forms/checkbox/Checkbox";
import { StatusLoans } from "../status-loans/statusLoans";
import { Dropdown } from "../../Library/dropdown/Dropdown";
import { Links } from "../../Library/links/Links";

export interface PatronPageProps {
  skeletonVersion?: boolean;
}

const PatronPage: React.FC<PatronPageProps> = ({ skeletonVersion = false }) => {
  if (skeletonVersion) return <>hello skeleton</>;

  const statusBarsData = [
    {
      title: "Loans per month",
      statusBars: [
        { amount: 1, fullAmount: 4, title: "Ebooks", outOf: "out of" },
        { amount: 2, fullAmount: 10, title: "Audiobooks", outOf: "out of" },
      ],
    },
  ];

  const branches = [
    {
      title: "Copenhagen",
    },
    {
      title: "New York",
    },
    {
      title: "The Moon",
    },
  ];

  return (
    <form className="dpl-patron-page">
      <h1 className="text-header-h1 my-32">Patron profile page</h1>

      <h2 className="text-header-h4 mt-32 mb-16">Basic details</h2>

      {/* Patron info section */}
      <PatronInfo
        name="Professor Utonium"
        nameLabel="Name"
        address="The Utonium Residence, 107 Pokey Oaks South, Townsville, USA"
        addressLabel="Address"
      />

      <div className="patron-page-info">
        {/* Contact info section */}
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

        {/* Digital loans section */}
        <section className="dpl-status-loans">
          <StatusLoans
            statusBarsData={statusBarsData}
            title="Digital loans (eReolen)"
            link={{
              link: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855",
              text: "Click here, to see titles always eligible to be loaned",
            }}
            bread="There is a number of materials without limitation to amounts of loans per month."
            reservationsText="You can reserve 4 ebooks and 10 audiobooks"
          />
        </section>

        {/* Pickup branch section */}
        <section>
          <h2 className="text-header-h4 mt-64 mb-16">Reservations</h2>
          <p className="text-body-small-regular mb-8">
            Change pickup body text
          </p>
          <label
            htmlFor="branches-dropdown"
            className="text-body-medium-medium mt-32 mb-8"
          >
            Choose pickup branch
          </label>
          <Dropdown
            list={branches}
            ariaLabel="branches"
            arrowIcon="chevron"
            classNames="dropdown__desktop"
          />
        </section>

        {/* Pin code section */}
        <section>
          <h2 className="text-header-h4 mt-64 mb-16">Pincode</h2>
          <p className="text-body-small-regular mb-8">
            Change current pin by entering a new pin and saving
          </p>
          <div className="dpl-pincode-container">
            <div className="patron__input patron__input--desktop">
              <Input
                label="New pin"
                type="password"
                id="pincode-input"
                description=""
              />
            </div>
            <div className="patron__input patron__input--desktop">
              <Input
                label="Confirm new pin"
                type="password"
                id="pincode-input-2"
                description=""
              />
            </div>
          </div>
        </section>

        <button
          className="mt-48 btn-primary btn-filled btn-small"
          type="submit"
        >
          Save
        </button>

        {/* Delete profile link */}
        <div className="text-body-small-regular mt-32">
          Do you wish to delete your library profile?{" "}
          <Links
            href="https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66855"
            linkText="Delete your profile"
            classNames="link-tag"
          />
        </div>
      </div>
    </form>
  );
};

export default PatronPage;
