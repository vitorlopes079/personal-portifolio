import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "@/components/ContactForm";
import { Locale, getTranslations } from "@/lib/translations";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === "pt";

  return {
    title: isPortuguese ? "Contato - Vitor Lopes" : "Contact - Vitor Lopes",
    description: isPortuguese
      ? "Entre em contato com Vitor Lopes para discutir seu próximo projeto ou oportunidade de colaboração."
      : "Get in touch with Vitor Lopes to discuss your next project or collaboration opportunity.",
  };
}

export default async function Contact({ params }: ContactPageProps) {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);

  const contactMethods = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "vitorlopes079@gmail.com",
      href: "mailto:vitorlopes079@gmail.com",
    },
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      value: "+353 83 020 6771",
      href: "https://wa.me/353830206771",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "vitorlopesdev",
      href: "https://www.linkedin.com/in/vitorlopesdev/",
    },
  ];

  return (
    <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat text-3xl md:text-4xl text-gray-900 font-bold uppercase tracking-wide mb-4">
            {translations.Ready}
          </h1>
          <p className="font-montserrat text-gray-600 max-w-xl mx-auto leading-relaxed">
            {translations.I_here_to_help}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="font-montserrat text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              {locale === "pt" ? "Contato Direto" : "Direct Contact"}
            </h2>

            <div className="space-y-5">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "Email" ? undefined : "_blank"}
                  rel={method.label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                    <FontAwesomeIcon icon={method.icon} className="text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{method.label}</p>
                    <p className="text-gray-800 font-medium group-hover:text-gray-600 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
              <h2 className="font-montserrat text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                {locale === "pt" ? "Enviar Mensagem" : "Send Message"}
              </h2>
              <ContactForm translations={translations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
