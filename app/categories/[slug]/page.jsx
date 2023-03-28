import Image from 'next/image'
import Link from 'next/link'

const fetchCat = async (slug) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${slug}&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

async function CategoryDisplay({ params: { slug } }) {
  const cat = await fetchCat(slug)

  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto flex items-center justify-between sm:justify-center my-4 flex-wrap'>
        {cat.results.map((item) => (
          <div
            key={item.id}
            className='w-[40%] sm:w-[20%] flex flex-col items-center justify-center m-3'
          >
            <Link
              href={`/movies/${item.id}`}
              className='flex flex-col items-center justify-center'
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width={200}
                height={200}
                alt={item.title}
                className='rounded-md shadow-[0_0_5px_1px_rgba(255,255,255,1)] mb-2 lg:w-[200px]'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryDisplay

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_API}`
  )

  const data = await res.json()

  return data.genres.map((item) => ({
    slug: item.id.toString(),
  }))
}
