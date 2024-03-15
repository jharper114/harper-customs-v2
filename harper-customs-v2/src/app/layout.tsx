"use client";

import { Navbar } from "@/components";
import { Inter } from "next/font/google";
import * as Styles from "./layout.style";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Harper Customs",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <AppWrapper>
          <Navbar />
          {children}
          <footer style={Styles.footerContainer}>footer text</footer>
        </AppWrapper>
      </body>
    </html>
  );
}
