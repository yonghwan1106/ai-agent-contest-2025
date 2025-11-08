import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "내일(My Job) 찾기 내비게이터 | AI 에이전트 서비스 시나리오 공모전",
  description: "퇴사부터 재취업까지, AI가 함께하는 새로운 시작. 실업자를 위한 통합 고용 지원 서비스. 연간 100만 명 대상, 5.5조원의 경제적 효과",
  keywords: "AI, 실업급여, 재취업, 고용서비스, 워크넷, 내일배움카드, AI 국민비서",
  openGraph: {
    title: "내일(My Job) 찾기 내비게이터",
    description: "AI가 자동으로 감지하고 안내하는 통합 고용 지원 서비스",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
