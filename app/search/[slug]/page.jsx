import Link from 'next/link'
import Image from 'next/image'

const search = async (slug) => {
  console.log(slug)
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API}&language=en-US&query=${slug}&page=1&include_adult=false`
  )
  const data = await res.json()
  return data
}

async function SearchResults({ params: { slug } }) {
  const searchResults = await search(slug)
  console.log(searchResults.results)

  return (
    <div className='w-full'>
      {searchResults.results.length === 0 ? (
        ''
      ) : (
        <h1 className='text-center w-full text-3xl capitalize'>
          Search results for {slug}
        </h1>
      )}

      <div className='w-[90%] flex flex-wrap mx-auto my-8 items-center justify-between sm:justify-center'>
        {searchResults.results.length !== 0 ? (
          searchResults.results.map((movie) => (
            <div
              key={movie.id}
              className='mx-2 w-[40%] sm:w-[20%] flex flex-col items-center justify-center'
            >
              <Link
                href={`/movies/${movie.id}`}
                className='flex flex-col items-center my-2'
              >
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    width={200}
                    height={200}
                    alt={movie.title}
                    className='rounded-md shadow-[0_0_5px_1px_rgba(255,255,255,1)] lg:w-[200px]'
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className='text-3xl'>No Results. Try searching again.</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
