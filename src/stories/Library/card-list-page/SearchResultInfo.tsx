export type SearchResultInfoProps = {
  linkName: string;
  linkTotalResults: string;
};

export const SearchResultInfo = ({
  linkName,
  linkTotalResults,
}: SearchResultInfoProps) => {
  return (
    // Todo: use content-list-page__heading
    <h2 className="text-body-medium-regular">
      Vis i stedet resultater fra{" "}
      <a className="link-tag text-body-medium-medium" href="/">
        {linkName}
      </a>{" "}
      ({linkTotalResults})
    </h2>
  );
};
