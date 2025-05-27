"use client"
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";
import EnhancedNavbar from "@/components/Navbar";
import OrnamentsFooter from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <AnimatedBackground />
        <EnhancedNavbar />
        {children}
        <OrnamentsFooter/>
        </Provider>
      </body>
    </html>
  );
}
