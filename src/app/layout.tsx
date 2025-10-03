import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'オールジェンス株式会社 - テクノロジーで未来を切り拓く',
    template: '%s | オールジェンス株式会社'
  },
  description: 'オールジェンス株式会社は、AI導入コンサルティング、システム運用サポート、ECマーケティング支援を通じて、人と社会を豊かにする技術活用を目指しています。',
  keywords: ['AI導入', 'システム運用', 'ECマーケティング', 'コンサルティング', 'テクノロジー'],
  authors: [{ name: 'オールジェンス株式会社' }],
  creator: 'オールジェンス株式会社',
  publisher: 'オールジェンス株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://allgens.co.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://allgens.co.jp',
    title: 'オールジェンス株式会社 - テクノロジーで未来を切り拓く',
    description: 'AI導入コンサルティング、システム運用サポート、ECマーケティング支援を通じて、お客様のビジネス成長をサポートします。',
    siteName: 'オールジェンス株式会社',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'オールジェンス株式会社',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'オールジェンス株式会社 - テクノロジーで未来を切り拓く',
    description: 'AI導入コンサルティング、システム運用サポート、ECマーケティング支援を通じて、お客様のビジネス成長をサポートします。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="msapplication-TileColor" content="#0284c7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "オールジェンス株式会社",
              "url": "https://allgens.co.jp",
              "logo": "https://allgens.co.jp/logo.png",
              "description": "AI導入コンサルティング、システム運用サポート、ECマーケティング支援を通じて、お客様のビジネス成長をサポートします。",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressLocality": "東京都",
                "addressRegion": "東京都"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+81-3-1234-5678",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
