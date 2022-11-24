import { createContext, Dispatch, useReducer } from "react"

interface Context {
  state: {
    selectedMovie: number
  }
  dispatch: Dispatch<any>
}

export const MovieContext = createContext<Context | null>(null)

const movieReducer = (state: any, action: any) => {
  switch (action.type) {
    case "select": {
      return { selectedMovie: action.payload }
    }
    case "reset": {
      return { selectedMovie: undefined }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface MovieProviderProps {
  children: JSX.Element | JSX.Element[]
}

const MovieProvider = ({ children }: MovieProviderProps) => {
  const [state, dispatch] = useReducer(movieReducer, {
    selectedMovie: undefined,
  })

  const value = { state, dispatch }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

export { MovieProvider }
