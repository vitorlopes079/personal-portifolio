import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const { t } = useTranslation();

  const handleChange = (event) => {
    if (isSubmitted || isError) {
      setIsSubmitted(false);
      setIsError(false);
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79v7qpa",
        "template_lfw1t2s",
        form.current,
        "ailhJLiaGLGjtodyW"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          setIsError(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitted(false);
          setIsError(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }
      );
  };

  const isFormIncomplete =
    !formData.name || !formData.email || !formData.message;

  return (
    <div className="block max-w-sm rounded-lg mt-3 md:p-6">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-7">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {t("Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={t("Name")}
            required
          />
        </div>

        <div className="mb-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {t("Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={t("Email")}
            required
          />
        </div>

        <div className="mb-7">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {t("Message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={t("Your_message")}
            required
          ></textarea>
        </div>
        {isSubmitted && (
          <div className="notification success">{t("Success")}</div>
        )}

        {isError && <div className="notification error">{t("Error")}</div>}

        <div className="flex justify-center mb-6">
          <button
            disabled={isFormIncomplete}
            type="submit"
            className={`relative px-5 py-2 overflow-hidden font-medium text-gray-900 bg-white border border-gray-100 rounded group w-64 mt-5 ${
              isFormIncomplete ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              {t("Send")}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
