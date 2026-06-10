import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zangem BnBs - Luxury Furnished Apartments in Ruiru",
  description:
    "Zangem BnBs provides premium furnished apartments at Membley Star Heights, Ruiru. Stay, invest, and experience modern living.",
  openGraph: {
    title: "Zangem BnBs",
    description: "Luxury Furnished Apartments in Ruiru",
    images: ["/images/logo.png"],
    siteName: "Zangem BnBs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-royal">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
