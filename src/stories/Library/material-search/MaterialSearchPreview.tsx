import { useEffect, useState } from "react";
import Cover from "../cover/Cover";
import MaterialTypeNotFoundError from "./Errors/MaterialTypeNotFoundError";
import WorkNotFoundError from "./Errors/WorkNotFoundError";
import { PreviewData } from "./MaterialSearchExampleData";
import MaterialSearchLoading from "./MaterialSearchLoading";
import ErrorState from "./Errors/ErrorState";

interface MaterialSearchPreviewProps {
  displayMaterial: boolean;
  errorState: ErrorState;
}

const MaterialSearchPreview = ({
  displayMaterial,
  errorState,
}: MaterialSearchPreviewProps) => {
  const [fictiveLoading, setFictiveLoading] = useState(false);

  useEffect(() => {
    if (displayMaterial) {
      setFictiveLoading(true);
      const timer = setTimeout(() => {
        setFictiveLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [displayMaterial]);

  if (errorState === ErrorState.WorkError) {
    return <WorkNotFoundError />;
  }
  if (errorState === ErrorState.MaterialTypeError) {
    return <MaterialTypeNotFoundError />;
  }

  if (fictiveLoading) {
    return (
      <div className="material-search__preview">
        <div className="material-search__preview-loading">
          <MaterialSearchLoading loadingText="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className="material-search__preview">
      {displayMaterial ? (
        <div className="material-search__preview-material">
          <Cover
            src={PreviewData.coverUrl}
            animate
            size="large"
            displaySize="small"
          />
          <div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Title:</span>
              <span className="material-search__preview-detail">
                {PreviewData.title}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Author:</span>
              <span className="material-search__preview-detail">
                {PreviewData.author}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">
                Publication Year:
              </span>
              <span className="material-search__preview-detail">
                {PreviewData.publicationYear}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Source:</span>
              <span className="material-search__preview-detail">
                {PreviewData.source}
              </span>
            </div>
            <div className="material-search__preview-item">
              <span className="material-search__preview-term">Work Id:</span>
              <span className="material-search__preview-detail">
                {PreviewData.workId}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="material-search__preview-empty">
          No material selected
        </div>
      )}
    </div>
  );
};

export default MaterialSearchPreview;
