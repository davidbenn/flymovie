import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Flymovie",
    description: "Uma plataforma de recomendação de filmes e series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
