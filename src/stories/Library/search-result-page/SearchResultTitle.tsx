export type SearchResultTitleProps = {
  title: string;
  totalResults: string;
  zeroResult: boolean;
};

export const SearchResultTitle = ({
  title,
  totalResults,
  zeroResult,
}: SearchResultTitleProps) => {
  if (zeroResult) {
    return (
      <h1 className="text-header-h2 mb-16 search-result-title animate__animated animate__slide-in-down">
        Din søgning gav 0 resultater
      </h1>
    );
  }

  return (
    <h1 className="text-header-h2 mb-16 search-result-title animate__animated animate__slide-in-down">
      {`Viser resultater for “${title}” (${totalResults})`}
    </h1>
  );
};
