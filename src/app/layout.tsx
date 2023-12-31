import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}