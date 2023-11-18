'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react'
import { useRef, useState } from 'react'

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
            <div className="h-24 fixed bottom-0 top-[calc(50vh_-_48px)] right-4 flex flex-col justify-between items-center">
                <Button
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
                    <ChevronUpCircle />
                </Button>
                <Button
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
                    <ChevronDownCircle />
                </Button>
            </div>
        </div>
    )
}
