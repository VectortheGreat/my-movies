import axios, { AxiosResponse } from "axios"
import React, { createContext, useContext, useEffect, useState } from "react"
import { MovieData } from "../types/Movies"

export type AppContextProps = {
  trendingMovies: MovieData["results"]
  setTrendingMovies: (value: AppContextProps["trendingMovies"]) => void
  discoverLocalMovies: MovieData["results"]
  setDiscoverLocalMovies: (
    value: AppContextProps["discoverLocalMovies"]
  ) => void
  discoverGlobalMovies: MovieData["results"]
  setDiscoverGlobalMovies: (
    value: AppContextProps["discoverGlobalMovies"]
  ) => void
}

export const appContextDefaultValues: AppContextProps = {
  trendingMovies: [],
  setTrendingMovies: () => {},
  discoverLocalMovies: [],
  setDiscoverLocalMovies: () => {},
  discoverGlobalMovies: [],
  setDiscoverGlobalMovies: () => {}
}

const AppContext = createContext(appContextDefaultValues)

export function AppContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const apiUrl = process.env.EXPO_PUBLIC_MOVIE_DB_URL || ""
  console.log(
    "process.env.EXPO_PUBLIC_MOVIE_DB_URL",
    process.env.EXPO_PUBLIC_MOVIE_DB_URL
  )
  const [trendingMovies, setTrendingMovies] = useState<
    AppContextProps["trendingMovies"]
  >([])
  const [discoverLocalMovies, setDiscoverLocalMovies] = useState<
    AppContextProps["trendingMovies"]
  >([])
  const [discoverGlobalMovies, setDiscoverGlobalMovies] = useState<
    AppContextProps["trendingMovies"]
  >([])
  const headers = {
    Authorization: process.env.EXPO_PUBLIC_ACCESS_TOKEN,
    "Content-Type": "application/json"
  }
  async function fetchTrendingMovies() {
    axios
      .get(`${apiUrl}/trending/movie/day?language=en-US`, {
        headers
      })
      .then((response: AxiosResponse<MovieData>) => {
        setTrendingMovies(
          response.data.results.map((movie) => ({
            ...movie,
            poster_path: "http://image.tmdb.org/t/p/w500" + movie.poster_path
          }))
        )
      })
  }
  async function fetchDiscoverLocalMovies() {
    axios
      .get(
        `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=tr`,
        {
          headers: {
            Authorization: process.env.EXPO_PUBLIC_ACCESS_TOKEN,
            "Content-Type": "application/json"
          }
        }
      )
      .then((response: AxiosResponse<MovieData>) => {
        setDiscoverLocalMovies(
          response.data.results.map((movie) => ({
            ...movie,
            poster_path: "http://image.tmdb.org/t/p/w500" + movie.poster_path
          }))
        )
      })
  }
  async function fetchDiscoverGlobalMovies() {
    axios
      .get(
        `${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: process.env.EXPO_PUBLIC_ACCESS_TOKEN,
            "Content-Type": "application/json"
          }
        }
      )
      .then((response: AxiosResponse<MovieData>) => {
        setDiscoverGlobalMovies(
          response.data.results.map((movie) => ({
            ...movie,
            poster_path: "http://image.tmdb.org/t/p/w500" + movie.poster_path
          }))
        )
      })
  }
  useEffect(() => {
    fetchTrendingMovies()
    fetchDiscoverLocalMovies()
    fetchDiscoverGlobalMovies()
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValues,
        trendingMovies,
        discoverLocalMovies,
        discoverGlobalMovies
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("App Context Error")
  }
  return context
}
