import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: 'Velpandy | Portfolio',
  description: 'Software Engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies.',
  // openGraph: {
  //   title: 'Velpandy | Portfolio',
  //   description: 'Software Engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies.',
  //   url: 'https://velpandy.dev',
  //   siteName: 'Velpandy Portfolio',
  //   images: [
  //     {
  //       url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Velpandy - Portfolio',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}