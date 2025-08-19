import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { notFound } from 'next/navigation';
import Navbar from '../../components/layout/Navbar';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
