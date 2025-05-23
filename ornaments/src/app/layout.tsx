import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";
import EnhancedNavbar from "@/components/Navbar";
import OrnamentsFooter from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <EnhancedNavbar />
        {children}
        <OrnamentsFooter/>
      </body>
    </html>
  );
}
