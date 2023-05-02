'use client'
import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export const EmblaCarousel = ({ trending }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
    inViewThreshold: 0.7,
  })
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes() // Access API
    }
  }, [emblaApi])

  return (
    <div
      className=' w-full relative'
      ref={emblaRef}
    >
      <div className='flex  my-5 mx-2   '>
        {trending.map((movie) => (
          <div
            key={movie.id}
            className='relative flex flex-none flex-wrap lg:flex-nowrap w-auto  lg:w-[20%] h-full mx-2 mx-10'
          >
            <div className='flex grow-0 shrink-0 basis-full min-w-0'>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width={300}
                  height={300}
                  alt={movie.title}
                  className='rounded-lg h-[300px] w-[200px] lg:h-[335px] lg:w-[300px] mx-auto my-2 shadow-[0_0_5px_1px_rgba(255,255,255,1)]'
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-[100%] h-1 m-auto justify-between absolute  top-[0%]  '>
        <SlArrowLeft
          className='embla__prev text-3xl lg:text-7xl h-[300px] lg:h-[390px] xl:h-[450px]  font-semibold cursor-pointer  opacity-80'
          onClick={scrollPrev}
        >
          Prev
        </SlArrowLeft>
        <SlArrowRight
          className='embla__next text-3xl lg:text-7xl h-[300px] lg:h-[390px] xl:h-[450px]  text-white font-semibold cursor-pointer  opacity-80'
          onClick={scrollNext}
        >
          Next
        </SlArrowRight>
      </div>
    </div>
  )
}

export default EmblaCarousel
