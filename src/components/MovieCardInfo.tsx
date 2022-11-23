import { Movie } from "../types/movies"
import { DateBadge } from "./DateBadge"

interface MovieCardInfoProps {
  movie: Movie
}

export const MovieCardInfo = ({ movie }: MovieCardInfoProps) => {
  const { title, genres, release_date } = movie

  return (
    <div className="content">
      <div className="info">
        <span className="title text-md" style={{ marginBottom: 8 }}>
          {title}
        </span>
        <span className="subtitle text-xs truncate">{genres.join(", ")}</span>
      </div>
      <DateBadge text={release_date.split("-")[0]} />
    </div>
  )
}
