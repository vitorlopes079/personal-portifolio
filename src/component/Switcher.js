import React, { useState, useEffect } from "react";
import i18next from "i18next";

const Switcher = () => {
  const [isEnglish, setIsEnglish] = useState(i18next.language === "en");

  useEffect(() => {
    const language = isEnglish ? "en" : "pt";
    i18next.changeLanguage(language);
  }, [isEnglish]);

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div
      className="w-20 h-6 responsive1000:w-24 responsive1000:h-8 flex items-center bg-gray-200 rounded-full cursor- cursor-pointer absolute right-6 md:left-10"
      onClick={handleToggle}
    >
      <div className="w-1/2 flex justify-center">
        <span className="text-xs font-medium">EN</span>
      </div>
      <div
        className={`absolute bg-gray-900 w-10 h-6 responsive1000:w-12 responsive1000:h-8 rounded-full shadow transform duration-300 ease-in-out ${
          isEnglish ? "translate-x-0" : "translate-x-10 responsive1000:translate-x-12"
        }`}
      ></div>
      <div className="w-1/2 flex justify-center">
        <span className="text-xxs responsive1000:text-xs font-medium">PT</span>
      </div>
    </div>
  );
};

export default Switcher;
