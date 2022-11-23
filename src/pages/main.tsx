import { useEffect, useState } from "react"
import { getMovies } from "../api/movies"
import { MovieHeader } from "../components/MovieHeader"
import { MovieList } from "../components/MovieList"
import { GetMoviesResult, SortOrder } from "../types/movies"

export const Main = () => {
  const [data, setData] = useState<GetMoviesResult | null>(null)
  const [filter, setFilter] = useState<string | undefined>()
  const [sortBy, setSortBy] = useState<string | undefined>("release_date")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovies({ filter, sortBy, sortOrder })
      if (result) {
        setData(result)
      }
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

  if (!data) return null

  return (
    <div className="container">
      <MovieHeader
        filter={filter}
        onFilterChange={onFilterChange}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={onSortChange}
      />
      <MovieList movies={data.data} />
    </div>
  )
}
