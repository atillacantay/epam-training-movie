import { Movie } from "../types/movies"
import { MovieCardActions } from "./MovieCardActions"
import { MovieCardImage } from "./MovieCardImage"
import { MovieCardInfo } from "./MovieCardInfo"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { poster_path, title } = movie

  return (
    <div className="card">
      <MovieCardImage src={poster_path} alt={title} />
      <MovieCardActions movie={movie} />
      <MovieCardInfo movie={movie} />
    </div>
  )
}
