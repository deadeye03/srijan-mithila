import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/section/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/progressBar-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srijan Mithila",
  description: "Best Mithila Products in India",
  icons: [{ rel: "icon", url: "https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            {children}
          </Providers>

        </body>
      </html>
    </ClerkProvider>
  );
}
