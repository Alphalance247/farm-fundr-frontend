import type { Metadata } from "next";
import "./globals.css";
import Notification from "./components/common/notifications";
import { AuthProvider } from "@/context/authContext";
import SessionExpired from "./components/common/sessionExpired";

export const metadata: Metadata = {
  title: "FarmPady — Africa’s agriculture investment hub",
  description: "FarmPady — Support farm projects, connect with farmers, and unlock agribusiness opportunities across Africa.",
  keywords:"FarmPady, Agriculture investment Nigeria, Invest in farming Africa, Farm crowdfunding platform, Support farmers Nigeria, Agriculture marketplace Africa, Farm projects funding, Farm to investor connection, Sustainable agriculture investment, Farming opportunities Nigeria, AgriTech Nigeria, Agriculture startup Africa, Farm investment platform, Nigerian farmers funding, Agribusiness investment",
  icons: {
    icon: '/favicon-farmpady.png',
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
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
