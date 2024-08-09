"use client";

import "./globals.css";
import { Albert_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${albertSans.className}`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
