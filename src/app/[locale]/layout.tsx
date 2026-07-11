import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {Analytics} from '@vercel/analytics/next';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-tc",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadataBase = new URL('https://optimaks.cc');
  const alternates = {
    canonical: `/${locale}`,
    languages: {
      'zh-TW': '/zh-TW',
      'zh-CN': '/zh-CN',
      'en': '/en',
      'x-default': '/zh-TW'
    }
  };

  if (locale === 'en') {
    const title = "Optimaks | Workflow Automation Partner for SG & SEA SMEs";
    const description = "We help service SMEs automate chaotic manual workflows. Custom WhatsApp bots, smart scheduling, auto-quoting and tracking with zero lock-in.";
    return {
      title,
      description,
      metadataBase,
      alternates,
      openGraph: {
        title,
        description,
        siteName: "Optimaks",
        locale: "en_US",
        type: "website"
      },
      twitter: {
        card: "summary",
        title,
        description
      }
    };
  }

  const titleZh = "Optimaks | 中小企業的 Workflow Optimization Partner";
  const descriptionZh = "Optimaks 協助中小企業梳理既有作業流程，整合 AI、自動化工具與輕量系統，減少重複人工與流程遺漏，讓團隊工作更清楚，營運更順暢。";
  const ogLocale = locale === 'zh-CN' ? 'zh_CN' : 'zh_TW';
  return {
    title: titleZh,
    description: descriptionZh,
    metadataBase,
    alternates,
    openGraph: {
      title: titleZh,
      description: descriptionZh,
      siteName: "Optimaks",
      locale: ogLocale,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: titleZh,
      description: descriptionZh
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as 'en' | 'zh-TW' | 'zh-CN')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${notoSansTC.variable} scroll-smooth`}
    >
      <body className="antialiased text-gray-800 bg-slate-50 font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
