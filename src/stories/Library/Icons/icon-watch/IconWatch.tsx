import { ReactComponent as WatchStaticIcon } from "../../../../public/icons/basic/icon-watch-static.svg";

export const IconWatch = () => {
  return (
    <div className="internal-container-grid">
      <div className="internal-center">
        <WatchStaticIcon />
        <span className="text-body-medium-regular">Clock</span>
      </div>
    </div>
  );
};

export default IconWatch;
