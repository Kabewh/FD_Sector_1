import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forta Dreptei Sector 1",
  description: "Forta Dreptei Sector 1 cel mai fortos partid.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-primary w-full`}
      >
        {children}
      </body>
    </html>
  );
}
