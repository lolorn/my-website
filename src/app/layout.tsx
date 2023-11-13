import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lolorn'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={(inter.className, 'select-none')}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TopBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
