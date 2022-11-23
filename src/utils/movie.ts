import { Movie, MovieForm } from "../types/movies"

export const getMovieFormData = (movie?: Movie): MovieForm => ({
  id: movie?.id,
  title: movie?.title || "",
  release_date: movie?.release_date || "",
  poster_path: movie?.poster_path || "",
  vote_average: movie?.vote_average || 0,
  genres: movie?.genres || [],
  runtime: movie?.runtime || 0,
  overview: movie?.overview || "",
})

export const convertRunTime = (runtime: number) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  return `${hours}h ${minutes}min`
}
