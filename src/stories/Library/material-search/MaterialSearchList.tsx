import { useEffect, useState } from "react";
import Cover from "../cover/Cover";
import { ListResultData } from "./MaterialSearchExampleData";
import MaterialSearchLoading from "./MaterialSearchLoading";

interface MaterialSearchListResultsProps {
  showListResults: boolean;
  selectedWorkId: string;
}

const MaterialSearchList = ({
  showListResults,
  selectedWorkId,
}: MaterialSearchListResultsProps) => {
  const [fictiveLoading, setFictiveLoading] = useState(showListResults);

  useEffect(() => {
    if (showListResults) {
      setFictiveLoading(true);
      const timer = setTimeout(() => {
        setFictiveLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [showListResults]);

  if (fictiveLoading && showListResults) {
    return (
      <div className="material-search-list">
        <div className="material-search-list__header" />
        <ul className="material-search-list__results">
          <li className="material-search-list__loading">
            <MaterialSearchLoading loadingText="Loading..." />
          </li>
        </ul>
      </div>
    );
  }

  if (!showListResults) {
    return null;
  }

  return (
    <div className="material-search-list">
      <div className="material-search-list__header">Total results: 5</div>
      <ul className="material-search-list__results">
        {ListResultData.map((work) => {
          return (
            <li
              key={work.workId}
              className={`material-search-list__item ${
                selectedWorkId === work.workId
                  ? "material-search-list__item--highlighted"
                  : ""
              }`}
            >
              <button
                className="material-search-list__button"
                data-work-id={work.workId}
              >
                <Cover
                  size="large"
                  displaySize="2xsmall"
                  src={work.coverUrl}
                  animate
                />
                <div>
                  <div className="material-search-list__detail-item">
                    <span className="material-search-list__term">Title:</span>
                    <span className="material-search-list__detail">
                      {work.title}
                    </span>
                  </div>
                  <div className="material-search-list__detail-item">
                    <span className="material-search-list__term">Author:</span>
                    <span className="material-search-list__detail">
                      {work.author}
                    </span>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
        <li className="material-search-list__loading">
          <MaterialSearchLoading loadingText="Loading..." />
        </li>
      </ul>
    </div>
  );
};

export default MaterialSearchList;
