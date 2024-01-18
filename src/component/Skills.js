import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javaScript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import nextjs from "../images/nextjs.png";
import typescript from "../images/typescript.png";

const Skills = () => {
  return (
    <div className="max-w-xl text-center w-full flex justify-center sm:mt-6">
      <div className="w-72 responsive500:w-116">
        <div className="w-full flex flex-wrap justify-between">
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={html}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="HTML"
            />
            <p className="hidden text-xs  font-mono font-bold tracking-tight responsive500:inline">
              HTML
            </p>
          </div>
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={css}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="CSS"
            />
            <p className="hidden text-xs font-mono font-bold tracking-tight responsive500:inline">
              CSS
            </p>
          </div>
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={tailwind}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="Tailwind CSS"
            />
            <p className="hidden text-xs f font-mono font-bold tracking-tight responsive500:inline">
              Tailwind
            </p>
          </div>
          <div className=" m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={javaScript}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="JavaScript"
            />
            <p className="hidden text-xs  font-mono font-bold tracking-tight responsive500:inline">
              JavaScript
            </p>
          </div>
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={typescript}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="Typescript"
            />
            <p className="hidden text-xs f font-mono font-bold tracking-tight responsive500:inline">
              Typescript
            </p>
          </div>
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={react}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="React"
            />
            <p className="hidden text-xs font-mono font-bold tracking-tight responsive500:inline">
              React
            </p>
          </div>
          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={redux}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="Redux"
            />
            <p className="hidden text-xs font-bold font-mono  tracking-tight responsive500:inline">
              Redux
            </p>
          </div>

          <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:my-5 mx-2">
            <img
              src={nextjs}
              className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
              alt="Next JS"
            />
            <p className="hidden text-xs f font-mono font-bold tracking-tight responsive500:inline">
              Next JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
