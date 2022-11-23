import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MovieProvider } from "./context/movie"
import { Main } from "./pages/main"

export const App = () => {
  return (
    <MovieProvider>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </MovieProvider>
  )
}
