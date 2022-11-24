import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as SearchIcon } from "../assets/search-button.svg"
import { fetchMovieById, reset } from "../features/movie/movieSlice"
import { AppDispatch, RootState } from "../store"
import { convertRunTime } from "../utils/movie"
import { IconButton } from "./atoms/IconButton"

interface MovieDetailsProps {
  id?: number
}

export const MovieDetails = ({ id }: MovieDetailsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const movie = useSelector((state: RootState) => state.movie.movieDetails)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        dispatch(fetchMovieById(id))
      }
    }

    fetchData()
  }, [id, dispatch])

  if (!movie) return null

  return (
    <div className="movie-details">
      <div className="navbar">
        <h3 className="heading-xs navbar-heading">netflixroulette</h3>
        <IconButton onClick={() => dispatch(reset())}>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="content">
        <img src={movie.poster_path} className="image" alt={movie.title} />
        <div className="info">
          <div className="movie-head">
            <span className="movie-title heading">{movie.title}</span>
            <div className="movie-vote">
              <span className="heading-xs">{movie.vote_average}</span>
            </div>
          </div>
          <span className="movie-genres">{movie.genres.join(" & ")}</span>
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
