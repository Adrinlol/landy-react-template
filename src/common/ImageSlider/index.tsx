import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

export const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const imageList: string[] = [
    '/img/svg/developer.svg',
    '/img/svg/waving.svg',
    '/img/svg/skidsteer.png'
  ];

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % imageList.length);
    }, 4000);

    return (): void => clearInterval(interval);
  }, [imageList]);

  const goToPrevious = (): void => {
    setCurrentImage(prevImage => (prevImage === 0 ? imageList.length - 1 : prevImage - 1));
  };

  const goToNext = (): void => {
    setCurrentImage(prevImage => (prevImage + 1) % imageList.length);
  };

  return (
    <div className="image-slider-container">
      <button className="prev-button" onClick={goToPrevious}>&lt;</button>
      
      <img src={imageList[currentImage]} alt={`Image ${currentImage + 1}`} />
      <button className="next-button" onClick={goToNext}>&gt;</button>
    </div>
  );
};


