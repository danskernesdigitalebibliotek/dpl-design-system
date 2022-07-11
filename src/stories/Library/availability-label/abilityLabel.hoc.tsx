import clsx from "clsx";
import { AvailabilityLabelPropsType } from "../../availability-label/types";
import { PagefoldProps } from "../pagefold/Pagefold";

type PropMapItem = Omit<PagefoldProps, "isInheriting" | "isAContainer"> & {
  classes: string[];
};
type PropsProcessedComponent<T> = Omit<
  T,
  "isInheriting" | "isAContainer" | "size"
> & {
  status: AvailabilityLabelPropsType["status"];
};

export const withAvailabilityProps = <T extends PagefoldProps>(
  Component: React.FC<T>
): React.FC<PropsProcessedComponent<T>> => {
  const defaultClasses = ["availability-label", "text-label"];

  return (props: PropsProcessedComponent<T>) => {
    const { status } = props;

    const propMap: {
      selected: PropMapItem;
      available: PropMapItem;
      unavailable: PropMapItem;
    } = {
      selected: {
        size: "none",
        classes: ["availability-label--selected"],
      },
      available: {
        size: "xsmall",
        classes: ["availability-label--unselected"],
        type: "success",
      },
      unavailable: {
        size: "xsmall",
        classes: ["availability-label--unselected"],
        type: "alert",
      },
    };

    const { classes, ...pageFoldProps } = propMap[status];

    const updatedProps: PagefoldProps = {
      className: clsx(defaultClasses, classes),
      ...pageFoldProps,
      isInheriting: false,
      isAContainer: false,
      ...props,
    };

    return <Component {...(updatedProps as T)} />;
  };
};

export default withAvailabilityProps;
