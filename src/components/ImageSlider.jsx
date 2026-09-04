import { useState } from 'react';

import { chevronLeftIcon, chevronRightIcon } from 'icons/svgIcon/svgIcons';

export default function ImageSlider({ images, alt, className = '' }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goPrev = e => {
    e.stopPropagation();
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  };

  const goNext = e => {
    e.stopPropagation();
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={images[index]}
        alt={`${alt} screenshot ${index + 1}`}
        className="h-full w-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-200 hover:bg-black/70 group-hover:opacity-100"
          >
            {chevronLeftIcon}
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-200 hover:bg-black/70 group-hover:opacity-100"
          >
            {chevronRightIcon}
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
