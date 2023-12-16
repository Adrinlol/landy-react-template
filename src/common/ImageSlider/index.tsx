import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

export const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const imageList: string[] = [
    '/img/svg/skidsteer.png',
    '/img/svg/IMG_3603.JPEG',
    '/img/svg/IMG_3601.JPEG',
    '/img/svg/IMG_3604.JPEG',
    '/img/svg/IMG_4090.jpg',
    '/img/svg/IMG_4092.JPEG',
    '/img/svg/IMG_4093.JPEG',
    '/img/svg/IMG_4094.JPEG',
    '/img/svg/IMG_4095.JPEG',
    '/img/svg/IMG_4096.JPEG',
    '/img/svg/IMG_4101.jpg',
    '/img/svg/IMG_4102.jpg',
    '/img/svg/IMG_4103.JPEG',
    '/img/svg/IMG_4104.JPEG',
    '/img/svg/IMG_4109.JPEG',
    '/img/svg/IMG_4110.JPEG',
    '/img/svg/IMG_4111.JPEG',
    '/img/svg/IMG_4164.jpg',
    '/img/svg/IMG_4166.jpg'
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


