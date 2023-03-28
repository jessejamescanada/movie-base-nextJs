// list of different genres
const getGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=893d15988e6969a46a9b6215c22a3fcc`
  )
  const data = await res.json()
  return data
}
export { getGenre }

// example of getting all ACTION genre
const getActionGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

export { getActionGenre }
// example of getting all COMEDY genre
const getComedyGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

export { getComedyGenre }
// example of getting all DRAMA genre
const getDramaGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

export { getDramaGenre }
// example of getting all HORROR genre
const getHorrorGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

export { getHorrorGenre }

// example of getting all SCIFI genre
const getScifiGenre = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`
  )
  const data = await res.json()
  return data
}

export { getScifiGenre }
