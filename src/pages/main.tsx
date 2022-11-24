import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MovieHeader } from "../components/MovieHeader"
import { MovieList } from "../components/MovieList"
import { fetchMovies } from "../features/movie/movieSlice"
import { AppDispatch, RootState } from "../store"
import { SortOrder } from "../types/movies"

export const Main = () => {
  const [filter, setFilter] = useState<string | undefined>()
  const [sortBy, setSortBy] = useState<string | undefined>("release_date")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const dispatch = useDispatch<AppDispatch>()
  const movies = useSelector((state: RootState) => state.movie.movies)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchMovies({ filter, sortBy, sortOrder }))
    }

    fetchData()
  }, [filter, sortBy, sortOrder])

  const onFilterChange = (newFilter?: string) => {
    setFilter(newFilter)
  }

  const onSortChange = (sortBy: string, sortOrder: SortOrder) => {
    setSortBy(sortBy)
    setSortOrder(sortOrder)
  }

  if (!movies?.data) return null

  return (
    <div className="container">
      <MovieHeader
        filter={filter}
        onFilterChange={onFilterChange}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={onSortChange}
      />
      <MovieList movies={movies.data} />
    </div>
  )
}
