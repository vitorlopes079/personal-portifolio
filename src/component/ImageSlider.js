import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images, isLargeScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImage = () => {
    setCurrentIndex(currentIndex === 0 ? 1 : 0);
  };

  return (
    <div className="hover-parent  relative responsive1000:w-2/4 lg:w-3/5 p-4 flex flex-col justify-center items-center">
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={toggleImage}
        className="arrow-left text-gray-500 text-4xl cursor-pointer z-10"
      />
      <img
        src={images[currentIndex]}
        className="border-2 border-gray-400"
        alt={`Slide ${currentIndex}`}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={toggleImage}
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