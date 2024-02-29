import clsx from "clsx";
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
    <div className={clsx("result-pager", classNames)}>
      <p className="text-small-caption result-pager__title">
        {`Showing ${currentResults} out of ${total} results`}
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
