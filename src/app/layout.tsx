import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Esmaeel Moustafa - Software Engineer",
  description: "Personal website and blog of a passionate software engineer",
  keywords: ["software engineer", "developer", "blog", "projects"],
  authors: [{ name: "Esmaeel Moustafa" }],
  creator: "Esmaeel Moustafa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Esmaeel Moustafa - Software Engineer",
    description: "Personal website and blog of a passionate software engineer",
    siteName: "Esmaeel Moustafa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esmaeel Moustafa - Software Engineer",
    description: "Personal website and blog of a passionate software engineer",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navigation />
            <main className="font-sans">{children}</main>
          </div>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
