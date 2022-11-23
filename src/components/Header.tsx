import { useState } from "react"
import HeaderBackground from "../assets/header-background.png"
import { AddUpdateMovieModal } from "./AddUpdateMovieModal"
import { TertiaryButton } from "./atoms/TertiaryButton"
import { Logo } from "./Logo"
import { Search } from "./Search"

export const Header = () => {
  const [modal, setModal] = useState(false)

  return (
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
      <AddUpdateMovieModal open={modal} closeModal={() => setModal(false)} />
      <div className="heading search" style={{ letterSpacing: 1 }}>
        <h5 className="title">FIND YOUR MOVIE</h5>
        <Search />
      </div>
    </div>
  )
}
