'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <main className="h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl">此页面不存在</h2>
            <Button>
                <Link href="/home">点击返回主页</Link>
            </Button>
        </main>
    )
}
