import { Providers } from './provider';
import './globals.css';
import localFont from 'next/font/local';

const nohemi = localFont({
  src: [
    {
      path: './../public/assets/fonts/Nohemi/Nohemi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../public/assets/fonts/Nohemi/Nohemi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nohemi',
});

const geist = localFont({
  src: [
    {
      path: './../public/assets/fonts/Geist/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../public/assets/fonts/Geist/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nohemi.variable} ${geist.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
