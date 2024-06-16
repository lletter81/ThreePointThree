import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "삼쩜삼 커뮤니티",
};

export default function RootLayout({
    menu,
  children,
    modal
}: Readonly<{
  menu: React.ReactNode
  children: React.ReactNode
    modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen bg-gray-200"}>
      {menu}
      {children}
      {modal}
      </body>
    </html>
  );
}
