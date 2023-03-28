'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

export const EmblaCarousel = ({ genres }) => {
  const autoplayOptions = {
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: true,
      inViewThreshold: 0.7,
    },
    [Autoplay(autoplayOptions)]
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes() // Access API
    }
  }, [emblaApi])

  return (
    <div
      className=' w-[90%] overflow-hidden mx-auto relative'
      ref={emblaRef}
    >
      <div className='flex my-5 mx-2'>
        {genres.genres.map((item) => (
          <div
            key={item.id}
            className='relative flex flex-none flex-wrap lg:flex-nowrap  h-full mx-2 mx-10'
          >
            <div className='flex grow-0 shrink-0 basis-full min-w-0'>
              <Link
                href={`categories/${item.id}`}
                className=''
              >
                <li className='px-2 py-1 bg-black shadow-[0px_2px_4px_-2px_rgba(255,255,255,1)] text-white rounded-md list-none'>
                  {item.name}
                </li>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
