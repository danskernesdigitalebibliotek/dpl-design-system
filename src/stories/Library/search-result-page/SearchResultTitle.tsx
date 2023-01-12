import clsx from "clsx";

export type SearchResultTitleProps = {
  title: string;
  totalResults: number;
  zeroResult: boolean;
  isLoading?: boolean;
};

export const SearchResultTitle = ({
  title,
  totalResults,
  zeroResult,
  isLoading = false,
}: SearchResultTitleProps) => {
  const classes = clsx(
    [
      "text-header-h2",
      "mb-16",
      "search-result-title",
      "animate__animated",
      "animate__slide-up-title",
    ],
    {
      "text-loading": isLoading,
    }
  );
  const total = totalResults.toLocaleString("da-Dk");

  if (zeroResult) {
    return <h1 className={classes}>Din søgning gav 0 resultater</h1>;
  }

  return (
    <h1 className={classes}>
      {isLoading && `Viser resultater for “${title}”`}
      {!isLoading && `Viser resultater for “${title}” (${total})`}
    </h1>
  );
};
