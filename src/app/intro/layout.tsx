import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: '个人介绍'
}

export default function IntroLayout({ children }: { children: ReactNode }) {
    return <main className="min-h-screen">{children}</main>
}
