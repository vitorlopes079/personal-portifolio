import myPhoto4 from "../images/myPhoto4.jpg";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import nextjs from "../images/nextjs.png";
import typescript from "../images/typescript.png";

import { useTranslation, Trans } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

function HomePage() {
  const { t } = useTranslation();
  t();

  return (
    <div className="flex flex-col justify-center items-center h-full md:flex-row overflow-hidden">
      <div className="overflow-hidden h-48 w-48 sm:mt-4 md:h-64 md:w-64 md:block">
        <img
          src={myPhoto4}
          alt="black and white selfie of myself holding a camera"
          className="photo h-full w-full object-cover"
        />
      </div>

      <div className="w-4/6 p-2 my-4 flex flex-col justify-between sm:w-3/6 md:justify-center md:h-60 md:ml-10 md:w-[350px] responsive1000:w-[370px] responsive1000:ml-20">
        <div>
          <h1 className="font-montserrat text-xl text-gray-800 font-bold uppercase tracking-wide sm:text-3xl md:text-4xl responsive1000:mb-3 responsive1000:text-5xl">
            Vitor Lopes
          </h1>

          <p className="font-montserrat font-medium text-gray-600 text-justify text-sm p-1 mb-5 responsive1000:my-4 sm:text-base responsive1000:leading-relaxed">
            <Trans
              i18nKey="Welcome"
              components={{
                1: <span className="font-bold text-base md:text-lg" />,
              }}
            />
          </p>
          {/* 
          <span className="font-bold text-base md:text-lg">Front-End </span> */}
        </div>

        <div className="flex justify-between">
          <img
            src={javascript}
            alt="javascript"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <img src={react} alt="react" className="h-8 w-8 md:h-10 md:w-10" />
          <img
            src={redux}
            alt="redux"
            className="h-8 w-
8 md:h-10 md:w-10"
          />
          <img
            src={tailwind}
            alt="tailwind"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <img src={nextjs} alt="nextjs" className="h-8 w-8 sm:h-10 md:w-10" />
          <img
            src={typescript}
            alt="typescript"
            className="h-8 w-8 sm:h-10 md:w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
