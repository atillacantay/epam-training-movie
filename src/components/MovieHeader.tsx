import { useMemo } from "react"
import genres from "../genres.json"
import { SortOrder } from "../types/movies"
import { Select } from "./atoms/Select"
import { Tabs } from "./Tabs"

interface MovieHeaderProps {
  filter?: string
  sortBy?: string
  sortOrder?: SortOrder
  onFilterChange: (filter?: string) => void
  onSortChange: (sortBy: string, sortOrder: SortOrder) => void
}

export const MovieHeader = ({
  filter,
  sortBy,
  sortOrder,
  onFilterChange,
  onSortChange,
}: MovieHeaderProps) => {
  const sortOptions = useMemo(
    () => [
      { value: ["release_date", "asc"], label: "Release Date (Asc)" },
      { value: ["release_date", "desc"], label: "Release Date (Desc)" },
      { value: ["vote_average", "asc"], label: "Average Vote (Asc)" },
      { value: ["vote_average", "desc"], label: "Average Vote (Desc)" },
    ],
    []
  )

  const handleTabChange = (newTab: string) => {
    const tab =
      newTab.toLowerCase() === "all" ? undefined : newTab.toLowerCase()
    onFilterChange(tab)
  }

  const handleSortChange = (sort: string | string[]) => {
    onSortChange(sort[0], sort[1] as SortOrder)
  }

  return (
    <div className="movie-header">
      <div className="movie-header-content">
        <Tabs
          onChange={handleTabChange}
          defaultTab={filter || "All"}
          tabs={["All", ...genres]}
        />
        <div className="sort">
          <span className="menu-item-text sort-label">SORT BY</span>
          <Select
            onChange={handleSortChange}
            placeholder={
              sortOptions.find(
                (sort) =>
                  sort.value?.[0] === sortBy && sort.value?.[1] === sortOrder
              )?.label
            }
            items={sortOptions}
          />
        </div>
      </div>
    </div>
  )
}
