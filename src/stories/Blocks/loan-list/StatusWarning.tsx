import { Counter } from "../../Library/counter/Counter";

const StatusWarning = () => (
  <Counter
    status="warning"
    value={1}
    label="day"
    percentage={100}
    isReady={false}
  />
);

export default StatusWarning;
