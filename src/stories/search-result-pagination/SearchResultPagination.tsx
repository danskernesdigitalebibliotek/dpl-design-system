import { Button } from "../button/Button";

interface SearchResultPaginationProps {
  currentResults: string;
  totalResults: string;
}

export const SearchResultPagination = ({
  currentResults,
  totalResults,
}: SearchResultPaginationProps) => {
  return (
    <div className="search-result-pagination">
      <p className="text-small-caption search-result-pagination__title">
        {`Viser ${currentResults} ud af ${totalResults} resultater`}
      </p>
      <Button
        label={"VIS FLERE"}
        disabled={false}
        buttonType={"none"}
        collapsible={false}
        size={"medium"}
        variant={"outline"}
        onClick={() => {
          console.log("onClick");
        }}
      />
    </div>
  );
};
