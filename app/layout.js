import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import ToastProvider from "./components/helper/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Rashvika Ponduri - Java Developer",
  description:
    "This is the portfolio of Rashvika Ponduri. I am a Java developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  openGraph: {
    title: "Portfolio of Rashvika Ponduri - Java Developer",
    description:
      "Portfolio of Rashvika Ponduri showcasing projects, skills, experience, and background as a Java Developer.",
    url: "https://rashvikap-github-io.vercel.app",
    siteName: "Rashvika Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Rashvika Ponduri Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}