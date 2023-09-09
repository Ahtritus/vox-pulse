import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vox Pulse",
  description: "Feedback Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="container">
            <div className="mx-auto flex items-start justify-center h-screen">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
