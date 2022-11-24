import { useDispatch } from "react-redux"
import { select } from "../features/movie/movieSlice"
import { AppDispatch } from "../store"
import { Movie } from "../types/movies"
import { MovieCardActions } from "./MovieCardActions"
import { MovieCardImage } from "./MovieCardImage"
import { MovieCardInfo } from "./MovieCardInfo"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { poster_path, title } = movie
  const dispatch = useDispatch<AppDispatch>()

  const onClick = () => {
    dispatch(select(movie.id))
  }

  return (
    <div className="card" onClick={onClick}>
      <MovieCardImage src={poster_path} alt={title} />
      <MovieCardActions movie={movie} />
      <MovieCardInfo movie={movie} />
    </div>
  )
}
