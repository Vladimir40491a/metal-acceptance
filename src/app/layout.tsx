import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900' ],
});

export const metadata: Metadata = {
  description: "Прием и вывоз металла в Москве",
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/x-icon',
    },
  },
  keywords: [
    'прием металла',
    'прием металлолома',
    'металлолом приемка',
    'сдать металл',
    'металлолом москва',
    'черный металл',
    'черный лом цена',
    'прием цветных металлов цены',
    'цветной металл цена',
    'цветной металл москва',
    'цветмет цена',
    'цветмет цена москва',
    'алюминий цена',
    'медь цена',
    'латунь цена',
    'свинец цена',
    'металлолом вывоз',
    'сдать аккумулятор',
    'сдать аккумулятор цена',
    'сдать аккумулятор москва',
  ],
  title: "Прием и вывоз металла",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
