import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images, isLargeScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="hover-parent relative responsive1000:w-2/4 lg:w-3/5 p-4 flex flex-col justify-center items-center">
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={goToPreviousImage}
        className="arrow-left text-gray-500 text-4xl cursor-pointer z-10"
      />
      <img
        src={images[currentIndex]}
        className="border-1 border-gray-200 "
        alt={`Slide ${currentIndex + 1}`}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={goToNextImage}
        className="arrow-right text-gray-500 text-4xl cursor-pointer z-10"
      />
      <div>
        {isLargeScreen && (
          <p className="text-sm text-red-600 pt-2">
            See the website's mobile view by narrowing your screen!
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;