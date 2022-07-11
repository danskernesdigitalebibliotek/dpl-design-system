const spaceClasses = [
  {
    classPrefix: "@media (min-width: 375px) {}",
    classProperty: "375px",
  },
  {
    classPrefix: "@media (min-width: 768px) {}",
    classProperty: "768px",
  },
  {
    classPrefix: "@media (min-width: 1024px) {}",
    classProperty: "1024px",
  },
  {
    classPrefix: "@media (min-width: 1440px) {}",
    classProperty: "1440px",
  },
  {
    classPrefix: "@media (min-width: 1920px) {}",
    classProperty: "1920px",
  },
  {
    classPrefix: "@media (min-width: 2200px) {}",
    classProperty: "2200px",
  },
];

export const Breakpoints = () => {
  return (
    <div>
      <p className="text-body-large">CSS breakpoints / sizes</p>
      <div className="internal-breakpoints-css-wrapper mt-24">
        {spaceClasses.map((spaceClass) => (
          <div className="internal-breakpoints-css-inner">
            <div className="internal-breakpoints-css-inner-prefix p-8">
              <pre>
                <code>{spaceClass.classPrefix}</code>
              </pre>
            </div>
            <div className="internal-breakpoints-css-inner-property p-8">
              {spaceClass.classProperty}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakpoints;
