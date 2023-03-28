import Link from 'next/link'
import Image from 'next/image'
import { fetchMovies } from '../../utils/FetchPopular'

const MovieFetchComponent = async () => {
  const movies = await fetchMovies()
  return (
    <>
      <div className='w-full flex flex-wrap justify-center my-4'>
        {movies.results.map((item) => (
          <div
            key={item.id}
            className='w-[15%] h-[300px] flex items-center justify-center mt-5'
          >
            <Link href={`/movies/${item.id}`}>
              <h2
                className='flex items-center justify-center text-center w-3/4 h-[70px] my-1 mx-auto'
                key={item.id}
              >
                {item.title}
              </h2>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width={150}
                height={150}
                alt={item.title}
                className='rounded-lg m-auto'
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieFetchComponent
