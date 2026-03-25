"use client";

import { useState } from "react";

interface ContactFormProps {
  translations: Record<string, string>;
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormIncomplete =
    !formData.name || !formData.email || !formData.message;

  return (
    <form onSubmit={sendEmail} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {translations.Name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
          placeholder={translations.Name}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {translations.Email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
          placeholder={translations.Email}
          required
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {translations.Message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
          placeholder={translations.Your_message}
          required
        ></textarea>
      </div>

      {/* Status */}
      {isSubmitted && (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-gray-800 text-sm">{translations.Success}</p>
        </div>
      )}

      {isError && (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-gray-800 text-sm">{translations.Error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        disabled={isFormIncomplete || isLoading}
        type="submit"
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          isFormIncomplete || isLoading
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          translations.Send
        )}
      </button>
    </form>
  );
}
