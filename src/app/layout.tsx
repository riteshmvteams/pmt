import type { Metadata } from "next";

import "./globals.css";
import { fontSans, lexendDeca } from "@/app/font";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";
import TopLoader from "@/components/shared/TopLoader";
import InitialLoad from "@/components/providers/initial-load";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          lexendDeca.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <InitialLoad>
            <TopLoader />
            {children}
          </InitialLoad>
          <Toaster
            position="top-center"
            toastOptions={{
              unstyled: false,
              classNames: {
                error: "bg-red-400",
                success: "text-green-600 bg-green-50",
                warning: "text-yellow-400",
                info: "bg-blue-400",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
