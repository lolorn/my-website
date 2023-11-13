'use client'
import { Github } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggle } from '@/components/ThemeToggle'
import Tooltips from '@/components/Tooltips'
import { Button } from '@/components/ui/button'

const TopBar = () => {
    return (
        <header className="flex p-2 sm:p-2 md:p-3 lg:p-4 justify-end items-center gap-4 hover:shadow-md transition-shadow duration-700">
            <ThemeToggle />
            <Tooltips text="查看Github主页">
                <Button variant={'outline'} size={'icon'}>
                    <Link href={'https://github.com/lolorn'} target="_blank">
                        <Github />
                    </Link>
                </Button>
            </Tooltips>
        </header>
    )
}

export default TopBar
