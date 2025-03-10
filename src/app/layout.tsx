import "@/app/globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

const KumbhSans = Kumbh_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${KumbhSans.className} bg-slate-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
