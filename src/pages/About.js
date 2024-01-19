import React from "react";
import myPhoto4 from "../images/myPhoto4.jpg";
import Skills from "../component/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
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
              <span className="font-bold mr-3 ">{t("Birthday")}</span>27.06.1994
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">Email:</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} className="pr-1 md:hidden" />
              vitorlopes079@gmail.com
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">
                {t("Phonenumber")}
              </span>
              <FontAwesomeIcon icon={faWhatsapp} className="md:hidden" /> +60
              17-474-2215
            </p>
          </div>
          <div div className=" leading-loose hidden md:block">
            <p className="mb-1">
              <span className="font-bold mr-3">{t("Nationality")}</span> {t("Brazil")}
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">{t("Interest")}</span> {t("Art")}
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">{t("Language")}</span> {t("English")}
            </p>
          </div>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/vitorlopesdev/"
            title="LinkedIn"
            className="inline-block bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-3  border border-blue-500 "
          >
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-8 md:w-1/2">
        <div className="mb-8">
          <h1 className="text-2xl font-montserrat text-gray-900 font-bold uppercase tracking-wide sm:text-3xl ">
            Vitor Lopes
          </h1>
          <p className="text-sm font-montserrat text-gray-600 text-justify leading-relaxed sm:text-base">
            {t("Web_developer")}
          </p>
        </div>
        <div className="mb-8">
          <p className="text-sm font-montserrat text-gray-900 text-justify leading-relaxed sm:text-base">
            {t("About_Text")}
          </p>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
