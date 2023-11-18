import type { Metadata } from 'next'
import { ReactNode } from 'react'

// import BreadCrumb from '@/components/BreadCrumb'
import TopBar from '@/components/TopBar'

export const metadata: Metadata = {
    title: 'lolorn-HomePage'
}

export default function HomePageLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen flex flex-col">
            <TopBar />
            {/* <BreadCrumb /> */}
            {children}
        </main>
    )
}
