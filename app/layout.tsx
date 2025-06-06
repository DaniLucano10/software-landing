import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechParaTi | Soluciones de software a medida",
  description:
    "TechParaTi es una empresa especializada en desarrollo de software personalizado, diseño de aplicaciones web y soluciones tecnológicas para negocios de todos los tamaños.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "TechParaTi",
    "soluciones tecnológicas",
    "transformación digital",
    "Next.js",
    "empresa de software",
  ],
  authors: [{ name: "TechParaTi", url: "https://software-tech-para-ti.vercel.app/" }],
  creator: "TechParaTi",
  publisher: "TechParaTi",
  metadataBase: new URL("https://software-tech-para-ti.vercel.app/"), // actualiza si tienes dominio
  openGraph: {
    title: "TechParaTi | Soluciones de software a medida",
    description:
      "Impulsa tu negocio con aplicaciones web y sistemas personalizados desarrollados por expertos.",
    url: "https://software-tech-para-ti.vercel.app/",
    siteName: "TechParaTi",
    images: [
      {
        url: "/images/hero.png", // Asegúrate que esta imagen esté optimizada
        width: 1200,
        height: 630,
        alt: "Vista previa del sitio TechParaTi",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechParaTi | Soluciones de software a medida",
    description:
      "Desarrollamos soluciones digitales que impulsan tu negocio al siguiente nivel.",
    images: ["/images/hero.png"],
    creator: "@TechParaTi", // tu handle de Twitter si tienes
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://software-tech-para-ti.vercel.app/" />
        <link rel="icon" href="/logo10.png" type="image/x-icon" />
      </head>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <header>
            <ResponsiveNav />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
