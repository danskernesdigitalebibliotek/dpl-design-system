import { Counter } from "../../Library/counter/Counter";

const StatusExpired = () => (
  <Counter
    status="danger"
    value={0}
    label="days"
    percentage={100}
    isReady={false}
  />
);

export default StatusExpired;
