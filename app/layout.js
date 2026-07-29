import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Srinivasan B | Full Stack Developer',
  description: 'Portfolio of Srinivasan B built with Next.js',
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