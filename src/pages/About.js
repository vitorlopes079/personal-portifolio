import React from "react";
import myPhoto4 from "../images/myPhoto4.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import javaScript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around mt-12 mb-12">
      <div className="ml-8">
        <div className="hidden md:block">
          <img
            src={myPhoto4}
            alt="me holding a camera"
            className="max-h-96 max-w-96"
          />
        </div>
        <div className="flex flex-col font-montserrat text-gray-900 text-justify my-8 ">
          <div className="leading-loose">
            <p className="mb-1 hidden md:block">
              <span className="font-bold mr-3 ">Birthday:</span>27.06.1994
            </p>
            <p className="mb-1 hidden md:block">
              <span className="font-bold mr-3">Age:</span>29
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">Email:</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} className="pr-1 md:hidden" />
              vitorlopes079@gmail.com
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">
                PhoneNumber:
              </span>
              <FontAwesomeIcon icon={faWhatsapp} className="md:hidden" /> +60
              17-474-2215
            </p>
          </div>
          <div div className=" leading-loose hidden md:block">
            <p className="mb-1">
              <span className="font-bold mr-3">Nationality:</span> Brazil
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">Interest:</span> Art, Travelling
              and Reading
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">Language Skills:</span> English,
              Portuguese
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">Freelance:</span> Available
            </p>
          </div>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/vitorlopesdev/"
            title="LinkedIn"
            className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-3  border border-blue-900 "
          >
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-8 md:w-1/2">
        <div className="mb-8">
          <h1 className="text-2xl font-montserrat text-gray-800 font-bold uppercase tracking-wide sm:text-3xl ">
            Vitor Lopes
          </h1>
          <p className="text-sm font-montserrat text-gray-600 text-justify leading-relaxed sm:text-base">
            Web developer
          </p>
        </div>
        <div className="mb-8">
          <p className="text-sm font-montserrat text-gray-900 text-justify leading-relaxed sm:text-base">
            Hello! I'm Vitor Lopes, a passionate front-end web developer with a
            keen interest in web design. My journey in this field is fueled by a
            lifelong admiration for art and beauty. I find immense joy in
            exploring the intersection of art and logic, blending creativity
            with technical precision to craft engaging digital experiences. I am
            dedicated to continuously refining my skills. Whether it's delving
            deeper into the nuances of technologies I'm already familiar with or
            embracing new tools and techniques. I believe that effective
            communication is the cornerstone of any successful project. It's
            through clear and open dialogue that ideas flourish and visions come
            to life. If you're envisioning a project and seeking a skilled,
            dedicated developer to transform your ideas into reality, I would be
            thrilled to hear from you. Let's collaborate to create something
            remarkable!
          </p>
        </div>
        <div className="max-w-xl text-center w-full flex justify-center sm:mt-6">
          <div className="w-48 responsive500:w-92 ">
            <div className="flex flex-wrap justify-between">
              <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={html}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="HTML"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  HTML
                </p>
              </div>
              <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={css}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="CSS"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  CSS
                </p>
              </div>
              <div className=" m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={javaScript}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="JavaScript"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  JavaScript
                </p>
              </div>
              <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={react}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="React"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  React
                </p>
              </div>
              <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={redux}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="Redux"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  Redux
                </p>
              </div>
              <div className="m-1 p-1 mb-2 bg-gray-100 rounded-lg shadow text-center  w-18 responsive500:w-20 responsive500:m-5">
                <img
                  src={tailwind}
                  className="w-10 h-10 responsive500:w-12 responsive500:h-12 mx-auto"
                  alt="Tailwind CSS"
                />
                <p className="hidden text-xs font-mono font-bold font-mono font-bold tracking-tight responsive500:inline">
                  Tailwind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
