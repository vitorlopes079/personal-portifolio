import { notFound } from "next/navigation";
import { locales, Locale, getTranslations } from "@/lib/translations";
import LayoutClient from "@/components/LayoutClient";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const translations = getTranslations(locale as Locale);

  return (
    <html lang={locale}>
      <body>
        <LayoutClient locale={locale as Locale} translations={translations}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
