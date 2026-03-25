import type { Metadata } from "next";
import Image from "next/image";
import { Locale, getTranslations } from "@/lib/translations";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === "pt";

  return {
    title: isPortuguese
      ? "Vitor Lopes - Desenvolvedor Full Stack"
      : "Vitor Lopes - Full Stack Developer",
    description: isPortuguese
      ? "Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras. Especializado em React, Next.js, TypeScript e Node.js."
      : "Full Stack Developer passionate about building innovative digital solutions. Specialized in React, Next.js, TypeScript, and Node.js.",
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);

  return (
    <div className="flex flex-col justify-center items-center h-full md:flex-row overflow-hidden">
      <div className="overflow-hidden h-48 w-48 sm:mt-4 md:h-64 md:w-64 md:block">
        <Image
          src="/images/myPhoto4.jpg"
          alt="black and white selfie of myself holding a camera"
          className="photo h-full w-full object-cover"
          width={256}
          height={256}
          priority
        />
      </div>

      <div className="w-4/6 p-2 my-4 flex flex-col justify-between sm:w-3/6 md:justify-center md:h-60 md:ml-10 md:w-[350px] responsive1000:w-[370px] responsive1000:ml-20">
        <div>
          <h1 className="font-montserrat text-xl text-gray-900 font-bold uppercase tracking-wide sm:text-3xl md:text-4xl responsive1000:mb-3 responsive1000:text-5xl">
            Vitor Lopes
          </h1>

          <p
            className="font-montserrat font-medium text-gray-600 text-justify text-sm p-1 mb-5 responsive1000:my-4 sm:text-base responsive1000:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: translations.Welcome }}
          />
        </div>

        <div className="flex justify-between">
          <Image
            src="/images/typescript.png"
            alt="TypeScript"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <Image
            src="/images/react.png"
            alt="React"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <Image
            src="/images/nextjs.png"
            alt="Next.js"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <Image
            src="/images/node.png"
            alt="Node.js"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <Image
            src="/images/postgresql.png"
            alt="PostgreSQL"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
          <Image
            src="/images/tailwind.png"
            alt="Tailwind"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
