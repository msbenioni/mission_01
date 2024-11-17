import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Upload from './components/Upload';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <Upload />
        {children}
        <Footer />
      </body>
    </html>
  );
}