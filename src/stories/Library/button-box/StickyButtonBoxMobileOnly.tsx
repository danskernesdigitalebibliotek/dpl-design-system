import { FC } from "react";

export interface StickyButtonBoxMobileOnlyProps {
  label: string;
}

const StickyButtonBoxMobileOnly: FC<StickyButtonBoxMobileOnlyProps> = ({
  label,
}) => {
  return (
    <div className="hide-on-desktop button-box button-box--sticky-bottom">
      <button
        data-cy="button"
        type="button"
        className="btn-primary btn-filled btn-small  arrow__hover--right-small "
      >
        {label}
      </button>
    </div>
  );
};

export default StickyButtonBoxMobileOnly;
