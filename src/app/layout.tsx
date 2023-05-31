import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ClientOnly } from "@/components/ClientOnly";
import { RegisterModal } from "@/components/modals/RegisterModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
