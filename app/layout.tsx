import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Srinivasan | Full Stack Developer',
  description: 'Tech Portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}