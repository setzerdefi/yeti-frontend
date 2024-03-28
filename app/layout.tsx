import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { WalletProvider } from "@/components/WalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yeti app",
    description: "Yeti app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookie = headers().get("cookie")

    return (
        <html lang="en">
            <body className={inter.className}>
                <WalletProvider cookie={cookie}>
                    {children}
                </WalletProvider>
            </body>
        </html>
    );
}
