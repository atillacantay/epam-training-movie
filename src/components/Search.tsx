import { PrimaryButton } from "./atoms/PrimaryButton"
import { SearchInput } from "./atoms/SearchInput"

export const Search = () => {
  return (
    <div className="search-bar">
      <SearchInput placeholder="What do you want to watch?" />
      <PrimaryButton className="button-text search-button">
        SEARCH
      </PrimaryButton>
    </div>
  )
}
