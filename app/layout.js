import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Saint's Models Agency",
  description: "Elite OnlyFans Modeling Partnership",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-icon",
      url: "/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font bg-pink-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
