import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Devant Asesores',
  description: 'Asesoramiento profesional y personalizado en pólizas de seguros. Protege lo que más importa con Devant Asesores.',
  keywords: 'seguros, asesores, correduría, pólizas, hogar, vida, auto, salud, Barcelona',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
