import { Button } from "../Buttons/button/Button";

interface ResultPagerProps {
  currentResults: number;
  totalResults: number;
  classNames?: string;
}

const ResultPager = ({
  currentResults,
  totalResults,
  classNames,
}: ResultPagerProps) => {
  const total = totalResults.toLocaleString("da-Dk");
  return (
    <div className={`${classNames} result-pager`}>
      <p className="text-small-caption result-pager__title">
        {`Viser ${currentResults} ud af ${total} resultater`}
      </p>
      {!(currentResults === totalResults) && (
        <Button
          label="SHOW MORE"
          disabled={false}
          buttonType="none"
          collapsible={false}
          size="medium"
          variant="outline"
        />
      )}
    </div>
  );
};

export default ResultPager;
