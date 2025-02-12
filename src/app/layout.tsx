import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
export const metadata: Metadata = {
  title: "TakeDown Hackathon",
  description:
    "hackathon Event Hosted By Universal Engineering College Thrissur, Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/hackathon_landing/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/hackathon_landing/favicon/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="/hackathon_landing/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/hackathon_landing/favicon/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/hackathon_landing/favicon/site.webmanifest"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative text-secondary">
        <Image
          src={"/hackathon_landing/assets/Bg.png"}
          alt="Background"
          fill
          quality={50}
          style={{ zIndex: -1 }}
          className="absolute !-top-4"
          priority
        />
        {children}
      </body>
    </html>
  );
}
