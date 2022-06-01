import clsx from "clsx";
import { PagefoldProps } from "../../01 Atoms/pagefold/Pagefold";
import { AvailabilityLabelPropsType } from "./AvailabilityLabel";

type PropMapItem = Omit<PagefoldProps, "isInheriting" | "isAContainer"> & {
  classes: string[];
};

export const withAvailabilityProps = <T extends PagefoldProps>(
  Component: React.ComponentType<T>
) => {
  const defaultClasses = ["availability-label", "text-label"];

  return (
    props: Omit<T, "isInheriting" | "isAContainer" | "size"> & {
      status: AvailabilityLabelPropsType["status"];
    }
  ) => {
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
