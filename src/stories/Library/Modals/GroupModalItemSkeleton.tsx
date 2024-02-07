import { FC } from "react";
import { Checkbox } from "../Forms/checkbox/Checkbox";

export type GroupModalItemSkeletonProps = {
  withLeftOutset?: boolean;
};

const GroupModalItemSkeleton: FC<GroupModalItemSkeletonProps> = ({
  withLeftOutset = false,
}) => {
  return (
    <li className="ssc">
      <div className="list-materials list-materials--disabled">
        {withLeftOutset && (
          <div className="list-materials__checkbox mr-32">
            <Checkbox isChecked={false} hiddenLabel label="Select" />
          </div>
        )}
        <div className="list-materials__content">
          <div className="list-materials__content-status">
            <div className="ssc-head-line status-label w-10" />
          </div>
          <div className="ssc-head-line status-label w-60 mt-8" />
          <div className="ssc-head-line status-label w-50" />
          <div className="ssc-line w-30" />
        </div>
        <div className="list-materials__status">
          <div>
            <div className="ssc-head-line status-label w-100 mt-8" />
            <div className="ssc-line w-100" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default GroupModalItemSkeleton;
