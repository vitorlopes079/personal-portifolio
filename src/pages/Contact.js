import React from "react";
import ContactForm from "../component/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center sm:items-start sm:h-112 sm:flex-row">
      <div className="mt-2 flex flex-col justify-between w-5/6 responsive1000:w-1/3 sm:w-2/5 md:pt-6">
        <div className="mt-6 sm:mr-5">
          <h1 className="font-montserrat text-2xl w-4/5 text-gray-800 font-bold  uppercase tracking-wide responsive500:text-3xl  md:text-4xl">
            {t("Ready")}
          </h1>
          <p className="font-montserrat font-medium text-gray-600 text-justify p-1 leading-relaxed w-5/6 mb-4 sm:mt-3 ">
            {t("I_here_to_help")}
          </p>
        </div>

        <div className="p-2 hidden sm:block">
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faEnvelope} className="px-2" />
            vitorlopes079@gmail.com
          </p>
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faWhatsapp} className="px-2" />
            +60 17-474-2215
          </p>
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faLinkedin} className="px-2" />
            vitorlopesdev
          </p>
        </div>
      </div>
      <div className="mt-6 responsive1000:w-1/3 md:w-2/5">
        <ContactForm />
      </div>
      <div className="p-6 text-sm text-center sm:hidden">
        <p className="text-gray-800">vitorlopes079@gmail.com</p>
        <p className="text-gray-800">+60 17-474-2215</p>
      </div>
    </div>
  );
}
