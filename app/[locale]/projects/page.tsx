import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";
import { Locale, getTranslations } from "@/lib/translations";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === "pt";

  return {
    title: isPortuguese ? "Projetos - Vitor Lopes" : "Projects - Vitor Lopes",
    description: isPortuguese
      ? "Confira os projetos desenvolvidos por Vitor Lopes, incluindo aplicações web com tecnologias modernas."
      : "Check out the projects developed by Vitor Lopes, including web applications with modern technologies.",
  };
}

export default async function Projects({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const translations = getTranslations(locale as Locale);

  return <ProjectsPage translations={translations} />;
}
