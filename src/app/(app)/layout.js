import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.css";
import Wrapper from "../context/Wraper";
import CustomCursor from "../components/(utility)/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sounak Hazra | Full-Stack Developer",
  description: "Portfolio of Sounak Hazra, a full-stack web developer skilled in Next.js, React, and MongoDB. Showcasing projects, skills, and contact details.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React.js",
    "Web Development",
    "MongoDB",
    "Portfolio",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  author: "Sounak Hazra",
  openGraph: {
    title: "Sounak Hazra | Full-Stack Developer",
    description: "Explore my portfolio featuring cutting-edge web development projects, skills, and more.",
    url: "https://portfolio-six-iota-92.vercel.app/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sounak Hazra Portfolio",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
