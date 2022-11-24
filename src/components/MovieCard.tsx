import { useContext } from "react"
import { MovieContext } from "../context/movie"
import { Movie } from "../types/movies"
import { MovieCardActions } from "./MovieCardActions"
import { MovieCardImage } from "./MovieCardImage"
import { MovieCardInfo } from "./MovieCardInfo"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { poster_path, title } = movie
  const context = useContext(MovieContext)

  const onClick = () => {
    context?.dispatch({ type: "select", payload: movie.id })
  }

  return (
    <div className="card" onClick={onClick}>
      <MovieCardImage src={poster_path} alt={title} />
      <MovieCardActions movie={movie} />
      <MovieCardInfo movie={movie} />
    </div>
  )
}
