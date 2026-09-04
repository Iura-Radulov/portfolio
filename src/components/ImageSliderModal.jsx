import { useEffect, useState } from 'react';

import {
  chevronLeftIcon,
  chevronRightIcon,
  closeIcon,
} from 'icons/svgIcon/svgIcons';

export default function ImageSliderModal({ images, title, onClose }) {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));

  const goNext = () =>
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors duration-200 hover:bg-white/20"
      >
        {closeIcon}
      </button>

      <div
        className="relative flex max-h-[85vh] w-full max-w-4xl items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="max-h-[85vh] w-full rounded-xl object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70 sm:left-4"
            >
              {chevronLeftIcon}
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70 sm:right-4"
            >
              {chevronRightIcon}
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={e => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                i === index ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
