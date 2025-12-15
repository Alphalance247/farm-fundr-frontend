import type { Metadata } from "next";
import "./globals.css";
import Notification from "./components/common/notifications";
import { AuthProvider } from "@/context/authContext";
import SessionExpired from "./components/common/sessionExpired";
import Script from "next/script";
import QueryProviders from "@/context/queryContext";

export const metadata: Metadata = {
  title: "FarmPady — Africa’s agriculture investment hub",
  description:
    "Nubyira LTD is an online based consulting and training company that specialise in process and plant design",
  keywords:
    "FarmPady, Agriculture investment Nigeria, Invest in farming Africa, Farm crowdfunding platform, Support farmers Nigeria, Agriculture marketplace Africa, Farm projects funding, Farm to investor connection, Sustainable agriculture investment, Farming opportunities Nigeria, AgriTech Nigeria, Agriculture startup Africa, Farm investment platform, Nigerian farmers funding, Agribusiness investment",
  icons: {
    icon: "/favicon-farmpady.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <AuthProvider>
          <Notification />
          <SessionExpired />
          <QueryProviders>{children}</QueryProviders>
          <Script
            id="tawkto"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68bd8f137040d11923c3d6da/1j4i7dp4i';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
              `,
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
