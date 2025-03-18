import PorscheNext from "./fonts/PorscheNext.otf"; // Assuming 'public' is the root of your project
import "./globals.css";

const inter = {
  className: "font-porsche",
  fontFace: `
    @font-face {
      font-family: 'PorscheNext';
      src: url('${PorscheNext}') format('opentype');
    }
  `,
};

export const metadata = {
  title: "Porsche GT3 RS - 2023 | Supercar de Performance Ultime",
  description:
    "Découvrez la Porsche GT3 RS 2023, la supercar de course légale sur route avec une puissance extraordinaire, une aérodynamique avancée et une performance sans compromis.",
  keywords:
    "Porsche GT3 RS, GT3 RS 2023, supercar, voiture de course, Porsche de course, performance automobile",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  other: {
    "color-scheme": "dark",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: inter.fontFace }} />
        <link rel="canonical" href="https://gt3rs.com" />
      </head>
      <body className={inter.className + " overflow-x-hidden"}>{children}</body>
    </html>
  );
}
