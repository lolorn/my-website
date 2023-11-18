'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl">出现了一些问题</h2>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                重试
            </Button>
        </main>
    )
}
