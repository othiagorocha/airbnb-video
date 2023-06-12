import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ClientOnly } from "@/components/ClientOnly";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { ToasterProvider } from "../providers/ToastProvider";
import { LoginModal } from "@/components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
