/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";

const Carousel = ({
  slides,
  percent_width,
  autoSlide = false,
  showButtons = false,
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const next = useCallback(() => {
    setCurrent(curr => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [next, current, autoSlide]);

  return (
    <div
      className="overflow-hidden relative"
      style={{ width: `${percent_width}%` }}
    >
      <div
        className="flex items-center slide-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.length &&
          slides.map((slide, i) => (
            <img key={i} src={slide.src} alt={slide.name} />
          ))}
      </div>
      {showButtons && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="btn-carousel">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={next} className="btn-carousel">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`transition-all w-1 h-1 bg-aqua rounded-full slide-out cursor-pointer ${
                current === i ? "p-0.5" : "bg-opacity-50"
              }`}
              onClick={() => {
                setCurrent(i);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
