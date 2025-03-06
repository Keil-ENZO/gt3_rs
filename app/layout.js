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
<head>
  <link rel="icon" href="./favicon.ico" />;
</head>;

export const metadata = {
  title: "GT3 RS - 2023",
  description:
    "Project GT3 RS - 2023 with Next.js, Tailwind CSS, GSAP, and WEBGL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="${inter.className} overflow-x-hidden">{children}</body>
    </html>
  );
}
