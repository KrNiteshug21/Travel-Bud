import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import "./globals.css";

export const metadata = {
  title: "Travel Buddy",
  description: "Generated by Travel Buudy",
};

export default function RootLayout({ session, children }) {
  return (
    <html lang="en" className="dark">
      <body className="relative bg-gray-300">
        <Wrapper session={session}>
          <Navbar />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
