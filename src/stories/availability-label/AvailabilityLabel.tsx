import { Pagefold, PagefoldProps } from "../pagefold/Pagefold";

export type AvailabilityLabelPropsType = {
  manifestation: "bog" | "ebog" | "lydbog (net)" | "lydbog (cd-mp3)";
  availability: "Hjemme" | "Online" | "Udlånt";
  status: "available" | "unavailable" | "selected";
  pagefoldProps: PagefoldProps;
};

export const AvailabilityLabel = (props: AvailabilityLabelPropsType) => {
  const { manifestation, availability, status } = props;

  const pagefoldProps = { ...props.pagefoldProps };

  function getPageFoldProps(
    currentStatus: AvailabilityLabelPropsType["status"]
  ) {
    if (currentStatus === "selected") {
      pagefoldProps.size = "none";
      pagefoldProps.classes =
        "availability-label availability-label--selected text-label";
    }
    if (currentStatus === "available") {
      pagefoldProps.size = "xsmall";
      pagefoldProps.classes =
        "availability-label availability-label--unselected text-label";
      pagefoldProps.colorClass = "success";
    }
    if (currentStatus === "unavailable") {
      pagefoldProps.size = "xsmall";
      pagefoldProps.classes =
        "availability-label availability-label--unselected text-label";
      pagefoldProps.colorClass = "alert";
    }
    return pagefoldProps;
  }

  return (
    <Pagefold {...getPageFoldProps(status)}>
      <img
        className={`availability-label--check ${status}`}
        src="icons/collection/Check.svg"
        alt="check-icon"
      />
      <p className="text-label-semibold ml-24">{manifestation.toUpperCase()}</p>
      <div className="availability-label--divider ml-4" />
      <p className="text-label-normal ml-4 mr-8">{availability}</p>
    </Pagefold>
  );
};
