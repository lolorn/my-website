'use client'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function BreadCrumb() {
    const _pathnameArr = usePathname().split('/')
    _pathnameArr.shift()
    const pathnameArr = _pathnameArr
    return (
        <div className="flex items-center px-2 sm:px-2 md:px-3 lg:px-4 fixed top-0 left-0 right-0 bg-transparent">
            {pathnameArr.map((item, index) =>
                item ? (
                    <div key={index} className="last:text-sky-500">
                        <Link
                            href={`/${pathnameArr
                                .slice(0, index + 1)
                                .join('/')}`}
                            className="flex items-center hover:underline hover:underline-offset-2"
                        >
                            {index === 0 ? null : (
                                <ChevronsRight className="text-slate-500 dark:text-slate-200" />
                            )}
                            {item}
                        </Link>
                    </div>
                ) : null
            )}
        </div>
    )
}
