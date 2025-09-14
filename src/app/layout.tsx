import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afrilink Telecoms (Pty) Ltd',
  description: 'Fast, reliable web hosting for South African businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
