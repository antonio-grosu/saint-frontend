import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Saint's Models Agency",
  description: "Elite OnlyFans Modeling Partnership",
  icons: {
    icon: "/icon.png",
    apple: "/apple.png",
    other: {
      rel: "apple-icon",
      url: "/apple.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
