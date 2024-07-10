import { PreviewData } from "../MaterialSearchExampleData";
import MaterialSearchBaseError from "./MaterialSearchBaseError";

const MaterialTypeNotFoundError: React.FC = () => {
  const { protocol } = window.location;

  const exampleUrl = `${protocol}/hostname/work/${PreviewData.workId}`;

  return (
    <MaterialSearchBaseError>
      <div className="material-search__error-content">
        <p className="material-search__error-description">
          The currently selected type of the material is no longer available in
          the system. As a result of this, the link is likely broken. Use the
          title or link underneath to find and update the material and its type.
        </p>
        <div className="material-search__error-material-content">
          <div className="material-search__error-item">
            <span className="material-search__error-term">Title:</span>
            <span className="material-search__error-detail">
              {PreviewData.title}
            </span>
          </div>
          <div className="material-search__error-item">
            <span className="material-search__error-term">Author:</span>
            <span className="material-search__error-detail">
              {PreviewData.author}
            </span>
          </div>
          <div className="material-search__error-item">
            <span className="material-search__error-term">Link: </span>
            <a
              href={exampleUrl}
              target="_blank"
              className="material-search__error-link"
              rel="noreferrer noopener"
            >
              {exampleUrl}
            </a>
          </div>
        </div>
      </div>
    </MaterialSearchBaseError>
  );
};

export default MaterialTypeNotFoundError;
