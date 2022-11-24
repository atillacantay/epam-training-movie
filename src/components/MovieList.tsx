import { Movie } from "../types/movies"
import { MovieCard } from "./MovieCard"

interface MovieListProps {
  movies: Movie[]
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="list-page">
      <h3 className="count input-text">
        <b>{movies.length}</b> movies found
      </h3>
      <div className="movie-list">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
