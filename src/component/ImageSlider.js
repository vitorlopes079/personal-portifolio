import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ImageSlider = ({ images, isLargeScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const goToPreviousImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="responsive1000:w-2/4 lg:w-3/5 ">
      <div className="relative w-full h-full">
        <button
          className="slider-button left-0 z-10 p-2"
          onClick={goToPreviousImage}
        >
          <ArrowBigLeft />
        </button>
        <div className="border-1 border-gray-200 w-full h-full overflow-hidden flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`} 
              className="object-cover w-full h-full block"
              style={{
                transform: `translateX(${-100 * currentIndex}%)`,
                transition: "transform 300ms ease-in-out",
              }}
            />
          ))}
        </div>

        <button
          className="slider-button right-0 z-10 p-2"
          onClick={goToNextImage}
        >
          <ArrowBigRight />
        </button>
        
      </div>
      <div className="flex justify-center">
        {isLargeScreen && (
          <p className="text-sm text-red-600 pt-2">{t("See_the_website")}</p>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
