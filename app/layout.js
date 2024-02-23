import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Age from "./Age";
export const metadata = {
  title: "18+ | Saint's Models Agency",
  description: "The way to a better living",
  icons: {
    icon: "/favicon.png",
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
      <body className="font bg-pink-500">
        <Age />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
