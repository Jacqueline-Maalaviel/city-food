import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import ContentLayout from "./content-layout";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'], 
  style: ['normal', 'italic'], 
  variable: '--font-josefin-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "City Food",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} bg-gray-300`}>
        <Provider>
          <ContentLayout>{children}</ContentLayout>
        </Provider>
      </body>
    </html>
  );
}