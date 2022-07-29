const shadowValues = [
  "shadow-low",
  "shadow-medium",
  "shadow-high",
  "shadow-low-hover",
  "shadow-medium-hover",
  "shadow-high-hover",
];

export const Shadow = () => {
  return (
    <div className="shadow-box-container m-24">
      <p className="text-body-large">Shadows</p>
      {shadowValues.map((shadowValue) => (
        <div className={shadowValue}>
          <div className="shadow-box-item">
            <pre className="p-12">.{shadowValue}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shadow;
