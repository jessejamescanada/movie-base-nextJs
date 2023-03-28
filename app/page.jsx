import Banner from '../components/Banner'
import { fetchMovies } from '../utils/FetchPopular'
import {
  getActionGenre,
  getComedyGenre,
  getDramaGenre,
  getHorrorGenre,
  getScifiGenre,
} from '../utils/HelperFunctions'

const Home = async () => {
  const trending = await fetchMovies()
  const trimmedTrending = trending.results.splice(0, 10)
  const action = await getActionGenre()
  const comedy = await getComedyGenre()
  const drama = await getDramaGenre()
  const horror = await getHorrorGenre()
  const scifi = await getScifiGenre()
  const trimmedAction = action.results.splice(0, 10)
  const trimmedComedy = comedy.results.splice(0, 10)
  const trimmedDrama = drama.results.splice(0, 10)
  const trimmedHorror = horror.results.splice(0, 10)
  const trimmedScifi = scifi.results.splice(0, 10)

  return (
    <main>
      <Banner
        trending={trimmedTrending}
        title='Trending'
      />
      <Banner
        trending={trimmedAction}
        title='Action'
      />
      <Banner
        trending={trimmedComedy}
        title='Comedy'
      />
      <Banner
        trending={trimmedDrama}
        title='Drama'
      />
      <Banner
        trending={trimmedHorror}
        title='Horror'
      />
      <Banner
        trending={trimmedScifi}
        title='Scifi'
      />
    </main>
  )
}

export default Home
