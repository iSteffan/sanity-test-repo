import type { Metadata } from 'next';
import '../globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My awesome site!',
  description: 'Generated by create next app + Sanity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to bg-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Stepan
          </Link>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}