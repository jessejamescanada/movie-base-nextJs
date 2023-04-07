'use client'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Image from 'next/image'

// fetch all favorites
const allFavorites = async () => {
  const response = await axios.get('/api/favs/getMovie')
  return response.data
}

const DashboardPage = () => {
  const {
    data: favData,
    error,
    isLoading,
  } = useQuery({
    queryFn: allFavorites,
    queryKey: ['favorites'],
  })
  if (error)
    return (
      <div className='w-full flex flex-col justify-center items-center my-8'>
        <h1 className='text-xl'>Sign in to save your movies!</h1>
      </div>
    )
  if (isLoading)
    return (
      <div className='w-full flex items-center justify-center my-4 text-lg'>
        Loading...
      </div>
    )
  console.log(favData)

  return (
    <div className='w-full'>
      <div>
        {favData ? (
          <div className='w-[90%] flex flex-wrap mx-auto my-8 items-center justify-between sm:justify-center'>
            <h1 className='text-center w-full text-3xl capitalize'>
              Your Saved Movies {favData[0]?.userName}
            </h1>
            {favData.map((movie) => (
              <div
                key={movie.id}
                className='mx-2 my-6 w-[40%] sm:w-[20%] flex flex-col items-center justify-center'
              >
                <Link
                  href={`/movies/${movie.movieId}`}
                  className='mx-2 w-auto sm:w-auto flex flex-col items-center justify-center'
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.movieImage}`}
                    width={300}
                    height={300}
                    alt={'movie'}
                    className='rounded-md shadow-[0_0_5px_1px_rgba(255,255,255,1)] lg:w-[200px]'
                  />
                  {/* <h1>{movie.movieTitle}</h1> */}
                  {/* <p>{movie.movieOverview}</p> */}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default DashboardPage
