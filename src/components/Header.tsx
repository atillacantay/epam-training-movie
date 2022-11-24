import { useState } from "react"
import { useSelector } from "react-redux"
import HeaderBackground from "../assets/header-background.png"
import { RootState } from "../store"
import { AddUpdateMovieModal } from "./AddUpdateMovieModal"
import { TertiaryButton } from "./atoms/TertiaryButton"
import { Logo } from "./Logo"
import { MovieDetails } from "./MovieDetails"
import { Search } from "./Search"

export const Header = () => {
  const [modal, setModal] = useState(false)
  const selectedMovie = useSelector(
    (state: RootState) => state.movie.selectedMovie
  )

  return (
    <>
      {selectedMovie ? (
        <MovieDetails id={selectedMovie} />
      ) : (
        <div
          className="header"
          style={{
            background: `url(${HeaderBackground})`,
          }}
        >
          <Logo className="brand-logo" />
          <TertiaryButton
            className="add-movie-button"
            onClick={() => setModal(true)}
          >
            + ADD MOVIE
          </TertiaryButton>
          <AddUpdateMovieModal
            open={modal}
            closeModal={() => setModal(false)}
          />
          <div className="heading search" style={{ letterSpacing: 1 }}>
            <span className="title">FIND YOUR MOVIE</span>
            <Search />
          </div>
        </div>
      )}
    </>
  )
}
