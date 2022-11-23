import { useContext, useEffect, useState } from "react"
import { getMovie } from "../api/movies"
import { ReactComponent as SearchIcon } from "../assets/search-button.svg"
import { MovieContext } from "../context/movie"
import { Movie } from "../types/movies"
import { convertRunTime } from "../utils/movie"
import { IconButton } from "./atoms/IconButton"

interface MovieDetailsProps {
  id?: number
}

export const MovieDetails = ({ id }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie>()
  const context = useContext(MovieContext)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getMovie(id)
        if (result) {
          setMovie(result)
        }
      }
    }

    fetchData()
  }, [id])

  if (!movie) return null

  return (
    <div className="movie-details">
      <div className="navbar">
        <h3 className="heading-xs navbar-heading">netflixroulette</h3>
        <IconButton onClick={() => context?.dispatch({ type: "reset" })}>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="content">
        <img src={movie.poster_path} className="image" alt={movie.title} />
        <div className="info">
          <div className="movie-head">
            <span className="movie-title heading">{movie.title}</span>
            <div className="movie-vote">
              <span heading-xs>{movie.vote_average}</span>
            </div>
          </div>
          <span className="movie-genres">{movie.genres.join("& ")}</span>
          <div className="movie-time">
            <span className="movie-date heading-sm">
              {movie.release_date?.split("-")[0]}
            </span>
            <span className="movie-runtime heading-sm">
              {convertRunTime(movie.runtime)}
            </span>
          </div>
          <span className="movie-overview">{movie.overview}</span>
        </div>
      </div>
    </div>
  )
}
