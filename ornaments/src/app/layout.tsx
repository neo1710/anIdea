import "./globals.css";
import EnhancedNavbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EnhancedNavbar />
        {children}
      </body>
    </html>
  );
}
