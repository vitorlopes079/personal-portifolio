import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Skills from "@/components/Skills";
import { Locale, getTranslations } from "@/lib/translations";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === "pt";

  return {
    title: isPortuguese
      ? "Sobre Mim - Vitor Lopes"
      : "About Me - Vitor Lopes",
    description: isPortuguese
      ? "Conheça Vitor Lopes, desenvolvedor full stack com 3 anos de experiência em desenvolvimento de software."
      : "Meet Vitor Lopes, a full stack developer with 3 years of experience in software development.",
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-around mt-12 mb-12">
      <div className="ml-8">
        <div className="hidden md:block">
          <Image
            src="/images/myPhoto4.jpg"
            alt="me holding a camera"
            className="max-h-96 max-w-96"
            width={384}
            height={384}
          />
        </div>
        <div className="flex flex-col font-montserrat text-gray-900 text-justify my-8">
          <div className="leading-loose">
            <p className="mb-1 hidden md:block">
              <span className="font-bold mr-3">{translations.Birthday}</span>
              27.06.1994
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">Email:</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} className="pr-1 md:hidden" />
              vitorlopes079@gmail.com
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3 hidden md:inline">
                {translations.Phonenumber}
              </span>
              <FontAwesomeIcon icon={faWhatsapp} className="md:hidden" /> +353 83
              020 6771
            </p>
          </div>
          <div className="leading-loose hidden md:block">
            <p className="mb-1">
              <span className="font-bold mr-3">{translations.Nationality}</span>{" "}
              {translations.Brazil}
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">{translations.Interest}</span>{" "}
              {translations.Art}
            </p>
            <p className="mb-1">
              <span className="font-bold mr-3">{translations.Language}</span>{" "}
              {translations.English}
            </p>
          </div>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/vitorlopesdev/"
            title="LinkedIn"
            className="inline-block bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500"
          >
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-8 md:w-1/2">
        <div className="mb-8">
          <h1 className="text-2xl font-montserrat text-gray-900 font-bold uppercase tracking-wide sm:text-3xl">
            Vitor Lopes
          </h1>
          <p className="text-sm font-montserrat text-gray-600 text-justify leading-relaxed sm:text-base">
            {translations.Web_developer}
          </p>
        </div>
        <div className="mb-8">
          <p className="text-sm font-montserrat text-gray-900 text-justify leading-relaxed sm:text-base">
            {translations.About_Text}
          </p>
        </div>
        <Skills />
      </div>
    </div>
  );
}
