import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import { RiMovie2Line } from 'react-icons/ri'
import WatchLater from '../../../components/WatchLater'

const fetchMovie = async (slug) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.MOVIE_API}&page=1&append_to_response=videos,similar`
  )
  const data = await res.json()
  return data
}

async function MovieDisplay({ params: { slug } }) {
  const movie = await fetchMovie(slug)
  // console.log(movie)

  return (
    <div className='w-full '>
      <div className='flex flex-col items-center w-auto  mx-auto my-10 sm:flex-row sm:w-[90%] sm:m-auto py-10'>
        <div>
          <h1 className='text-4xl text-center font-bold tracking-wider'>
            {movie.title}
          </h1>
          <p className='my-1 text-center'>Release Date: {movie.release_date}</p>
          <div className='flex justify-center'>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={300}
              height={300}
              alt={movie.title}
              className='rounded-lg shadow-[0_0_5px_1px_rgba(255,255,255,1)] mt-2'
            />
          </div>
        </div>
        <div className='w-[80%] mx-auto sm:px-8'>
          {movie.videos.results[0] ? (
            <Link
              href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
            >
              <p className='flex items-center justify-center my-2 font-bold text-blue-500'>
                Watch Trailer <RiMovie2Line className='ml-2 text-xl' />
              </p>
            </Link>
          ) : (
            ''
          )}

          <p className='font-semibold tracking-wide text-center sm:text-left'>
            {movie.overview}
          </p>

          <p className='text-center flex items-center justify-center mt-3'>
            Rating: {movie.vote_average}{' '}
            <AiFillStar className='text-red-600 ml-1' />
          </p>
          <div>
            <WatchLater movie={movie} />
          </div>

          <div className='flex flex-col'>
            <h3 className='text-center text-2xl mt-4'>Similar Movies</h3>
            <div className='flex  items-center justify-center'>
              {movie.similar.results.splice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className='w-1/4 h-full mx-1 mt-3'
                >
                  <Link
                    href={`/movies/${item.id}`}
                    className='flex items-center  justify-between lg:justify-center'
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      width={125}
                      height={125}
                      alt={item.title}
                      className='rounded flex'
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDisplay

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API}&page=1`
  )
  const data = await res.json()

  return data.results.map((movie) => ({
    slug: movie.id.toString(),
  }))
}
