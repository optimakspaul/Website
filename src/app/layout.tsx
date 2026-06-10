import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "Optimaks | 中小企業的 Workflow Optimization Partner",
  description: "Optimaks 協助中小企業梳理既有作業流程，整合 AI、自動化工具與輕量系統，減少重複人工與流程遺漏，讓團隊工作更清楚，營運更順暢。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSansTC.variable} scroll-smooth`}
    >
      <body className="antialiased text-gray-800 bg-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
