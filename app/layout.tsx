import Navbar from './components/Navbar';
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
        {children}
        <Footer />
      </body>
    </html>
  );
}