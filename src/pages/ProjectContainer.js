import React from "react";
import ImageSlider from "../component/ImageSlider";

const ProjectContainer = ({ title, text, images, isEven, code, live, isLargeScreen}) => {
  

  return (
    <div
      className={`flex flex-col-reverse justify-around items-center bg-gray-100 rounded-lg shadow mt-12 mx-6 md:my-24 p-5 ${
        isEven ? "responsive1000:flex-row-reverse" : "responsive1000:flex-row"
      }`}
    >
      <div className=" responsive1000:w-2/5 lg:w-1/3">
        <h1 className="font-montserrat text-xl text-gray-800 font-bold mb-1 lg:mb-3 uppercase tracking-wide p-1 lg:text-2xl">
          {title}
        </h1>

        <p className="text-sm font-montserrat font-medium text-gray-800 text-justify p-1 leading-relaxed mb-2 lg:mb-10 lg:text-lg">
          {text}
        </p>

        <div className="flex p-1">
          <p className="text-center lg:text-xl mr-10 font-bold">
            <a
              href={live}
              className="anchor underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Website
            </a>
          </p>

          <p className="text-center lg:text-xl font-bold">
            <a
              href={code}
              className="anchor underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Code
            </a>
          </p>
        </div>
      </div>
      <ImageSlider images={images} isLargeScreen={isLargeScreen} />
    </div>
  );
};

export default ProjectContainer;
