import { FC, ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";

type SliderProps = {
  title?: string;
  items: ReactNode[];
};

const Slider: FC<SliderProps> = ({ title, items }) => {
  useEffect(() => {
    require("./init-slider");
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
      </Helmet>

      <div className="slider swiper">
        <div className="slider__header">
          {title ? <h2 className="slider__title">{title}</h2> : ""}

          <div className="slider__controls" data-glide-el="controls">
            <button
              className="slider__control swiper-next"
              aria-label="Scroll fremad"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="26"
                viewBox="0 0 115 26"
                fill="black"
              >
                <path d="M114.707 13.2464C115.098 12.8559 115.098 12.2228 114.707 11.8322L108.343 5.46827C107.953 5.07774 107.319 5.07774 106.929 5.46827C106.538 5.85879 106.538 6.49196 106.929 6.88248L112.586 12.5393L106.929 18.1962C106.538 18.5867 106.538 19.2199 106.929 19.6104C107.319 20.0009 107.953 20.0009 108.343 19.6104L114.707 13.2464ZM0 13.5393H114V11.5393H0V13.5393Z" />
              </svg>
            </button>
            <button
              className="slider__control swiper-prev"
              aria-label="Scroll tilbage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="25"
                viewBox="0 0 115 25"
                fill="black"
              >
                <path d="M0.292893 12.0906C-0.0976333 12.4811 -0.0976334 13.1143 0.292892 13.5048L6.65685 19.8688C7.04738 20.2593 7.68054 20.2593 8.07107 19.8688C8.46159 19.4783 8.46159 18.8451 8.07107 18.4546L2.41422 12.7977L8.07107 7.14087C8.46159 6.75034 8.46159 6.11718 8.07107 5.72665C7.68054 5.33613 7.04738 5.33613 6.65685 5.72665L0.292893 12.0906ZM115 11.7977L1 11.7977L1 13.7977L115 13.7977L115 11.7977Z" />
              </svg>
            </button>
          </div>
        </div>

        <ul className="swiper-wrapper">
          {items.map((item, index) => {
            return (
              <li key={index} className="swiper-slide slider__item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Slider;
