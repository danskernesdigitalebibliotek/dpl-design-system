import Disclosure from "../../Library/disclosure/Disclosure";
import { generateId } from "../../Library/horizontal-term-line/HorizontalTermLine";
import ListDescription, {
  ListData,
} from "../../Library/Lists/list-description/ListDescription";
import fakeData from "../../Library/Lists/list-description/ListDescriptionFakeData";
import MaterialDescription from "../../Library/material-description/MaterialDescription";
import MaterialHeader from "../../Library/material-header/MaterialHeader";
import { Review } from "../../Library/review/Review";
import { MaterialMainfestationItem } from "../material-manifestation-item/MaterialMainfestationItem";

export interface MaterialPageProps {
  title: string;
  author: string;
  periodical?: boolean;
  ctaText?: string;
  description?: string;
  editionsDisclosureOpen?: boolean;
}

const MaterialPage: React.FC<MaterialPageProps> = ({
  title,
  author,
  periodical,
  ctaText,
  description,
  editionsDisclosureOpen = false,
}) => {
  const amountOfRenders = [1, 2];
  return (
    <div className="material-page">
      <MaterialHeader
        title={title}
        author={author}
        periodical={periodical}
        ctaText={ctaText}
      />
      <MaterialDescription description={description} />
      <Disclosure
        headline="Udgaver (2)"
        icon="Various"
        headingLevel="h2"
        defaultOpen={editionsDisclosureOpen}
      >
        {amountOfRenders.map((item, index) => {
          return (
            <MaterialMainfestationItem
              key={generateId(item)}
              title="Title"
              author="Author"
              year="2022"
              detailsData={fakeData as ListData}
              defaultOpen={editionsDisclosureOpen && index === 0}
            />
          );
        })}
      </Disclosure>
      <Disclosure headline="Detaljer" icon="Receipt" headingLevel="h2">
        <ListDescription data={fakeData as ListData} className="pl-80 pb-48" />
      </Disclosure>
      <Disclosure headline="Anmeldelser" icon="Create" headingLevel="h2">
        <Review
          numberOfReviews={1}
          meta="Meta headline"
          hearts={3}
          headline="Headline"
          body="Body text of the review..."
          linkText="Link to review"
          linkLink="/"
        />
      </Disclosure>
    </div>
  );
};

export default MaterialPage;
