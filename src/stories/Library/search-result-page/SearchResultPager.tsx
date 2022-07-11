import { Button } from "../Buttons/button/Button";

interface SearchResultPagerProps {
  currentResults: string;
  totalResults: string;
}

const SearchResultPager = ({
  currentResults,
  totalResults,
}: SearchResultPagerProps) => {
  return (
    <div className="search-result-pager">
      <p className="text-small-caption search-result-pager__title">
        {`Viser ${currentResults} ud af ${totalResults} resultater`}
      </p>
      <Button
        label="VIS FLERE"
        disabled={false}
        buttonType="none"
        collapsible={false}
        size="medium"
        variant="outline"
        onClick={() => console.log("onClick")}
      />
    </div>
  );
};

export default SearchResultPager;
