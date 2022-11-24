import { Provider } from "react-redux"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MovieProvider } from "./context/movie"
import { Main } from "./pages/main"
import { store } from "./store"

export const App = () => {
  return (
    <Provider store={store}>
      <MovieProvider>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </MovieProvider>
    </Provider>
  )
}
