// src/app/layout.js
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '@/app/globals.css';

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'Z Double B Construction | Calgary Construction Services',
    template: '%s | Z Double B Construction'
  },
  description: 'Z Double B Construction delivers high-quality construction services in Calgary, Alberta. Specializing in commercial and residential construction with a focus on client satisfaction.',
  keywords: ['construction', 'Calgary', 'Alberta', 'commercial construction', 'residential construction', 'renovation'],
  authors: [{ name: 'Z Double B Construction' }],
  creator: 'Z Double B Construction',
  publisher: 'Z Double B Construction',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}