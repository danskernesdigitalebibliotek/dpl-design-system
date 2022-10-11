import React from "react";
import clsx from "clsx";

export type CampaignProps = {
  reverse?: boolean;
  ellipsis?: boolean;
  title: string;
};

const Campaign: React.FunctionComponent<CampaignProps> = ({
  reverse,
  ellipsis,
  title,
}) => {
  const classes = {
    campaign: clsx(`campaign`, { "campaign--reverse": reverse }),
    image: "campaign__image",
    title: clsx("campaign__title", { "campaign__title--ellipsis": ellipsis }),
  };

  return (
    <section className={classes.campaign}>
      <img
        className={classes.image}
        src="https://picsum.photos/id/777/300/200"
        alt=""
      />
      <h4 className={classes.title}>{title}</h4>
    </section>
  );
};

export default Campaign;
