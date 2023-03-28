import CategoriesCarousel from './CategoriesCarousel'

const getGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_API}`
  )
  const data = await res.json()
  return data
}

const CategoryLinks = async () => {
  const genres = await getGenre()
  // console.log(genres)
  return (
    <div className='w-full'>
      <div>
        <CategoriesCarousel genres={genres} />
      </div>
    </div>
  )
}

export default CategoryLinks
