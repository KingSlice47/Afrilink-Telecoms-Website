import '../../css/styles.css';
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
      <body>{children}</body>
    </html>
  );
}
