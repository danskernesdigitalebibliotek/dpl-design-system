const shadowValues = [
  "shadow-low",
  "shadow-medium",
  "shadow-high",
  "shadow-low-hover",
  "shadow-medium-hover",
  "shadow-high-hover",
];

export const Shadows = () => {
  return (
    <div className="shadow-box-container m-24">
      <p className="text-body-large">Shadows</p>
      {shadowValues.map((item, index) => (
        <div key={index} className={item}>
          <div className="shadow-box-item">
            <pre className="p-12">.{item}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shadows;
