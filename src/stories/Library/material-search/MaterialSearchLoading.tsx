import LoadingLogo from "../../../public/icons/logo/reload_logo_black.svg";

interface ReloadLoadingIconProps {
  loadingText: string;
}

const MaterialSearchLoading = ({ loadingText }: ReloadLoadingIconProps) => {
  return (
    <div className="material-search__loading">
      <img
        src={LoadingLogo}
        alt=""
        className="material-search__loading-spinner"
      />
      <span className="material-search__loading-text">{loadingText}</span>
    </div>
  );
};

export default MaterialSearchLoading;
