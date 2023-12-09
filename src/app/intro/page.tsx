'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ChevronDownCircle, ChevronUpCircle, Home } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

import Tooltips from '@/components/Tooltips'
import { Button } from '@/components/ui/button'

export default function IntroPage() {
    const parallax = useRef<IParallax>(null!)
    const [index, setIndex] = useState<number>(0)
    const pages = 5
    return (
        <div>
            <Parallax ref={parallax} pages={pages} className="bg-sky-200">
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    className="flex items-center justify-center"
                >
                    <p>Hello This is Lolorn</p>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.5}>
                    <p>Page2</p>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={2.5}>
                    <p>Page3</p>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={3.5}>
                    <p>Page4</p>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={4.5}>
                    <p>Page5</p>
                </ParallaxLayer>
            </Parallax>
            <div className="h-36 p-2 fixed bottom-0 top-[calc(50vh_-_72px)] right-4 flex flex-col justify-between items-center bg-black/10 backdrop-blur-md rounded-lg shadow-md">
                <Button
                    className="bg-transparent hover:bg-black/10 hover:scale-110 transition-all"
                    variant={'default'}
                    size={'icon'}
                    onClick={() => {
                        if (index === 0) {
                            parallax.current.scrollTo(pages - 1)
                            setIndex(pages - 1)
                        } else {
                            parallax.current.scrollTo(index - 1)
                            setIndex((prv) => prv - 1)
                        }
                    }}
                >
                    <Tooltips text="上一页">
                        <ChevronUpCircle />
                    </Tooltips>
                </Button>
                <Button
                    className="bg-transparent hover:outline"
                    variant={'default'}
                    size={'icon'}
                >
                    <Link href={'/home'}>
                        <Tooltips text="返回主页">
                            <Home />
                        </Tooltips>
                    </Link>
                </Button>
                <Button
                    className="bg-transparent hover:bg-black/10 hover:scale-110 transition-all"
                    variant={'default'}
                    size={'icon'}
                    onClick={() => {
                        if (index === pages - 1) {
                            parallax.current.scrollTo(0)
                            setIndex(0)
                        } else {
                            parallax.current.scrollTo(index + 1)
                            setIndex((prv) => prv + 1)
                        }
                    }}
                >
                    <Tooltips text="下一页">
                        <ChevronDownCircle />
                    </Tooltips>
                </Button>
            </div>
        </div>
    )
}
