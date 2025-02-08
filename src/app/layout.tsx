import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TakeDown Hackathon",
  description: "hackathon Event Hosted By Universal Engineering College Thrissur, Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        type="image/png"
        href="favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
      <link rel="shortcut icon" href="favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className="bg-secondary bg-[url('/natural-paper.png')] bg-repeat text-gray-900 
        before:content-[''] before:absolute before:inset-0 
        before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_10%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1)_10%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.1)_10%,transparent_50%)] 
        before:pointer-events-none before:z-10 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
