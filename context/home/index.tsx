import { appContextDefaultValues, AppContextProps } from "@/context/app_context"
import { createContext, useContext } from "react"

export type HomePageContextProps = AppContextProps

export const homePageDefaultValues: HomePageContextProps = {
  ...appContextDefaultValues
}

const HomePageContext = createContext(homePageDefaultValues)

export function HomePageContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <HomePageContext.Provider
      value={{
        ...homePageDefaultValues
      }}
    >
      {props.children}
    </HomePageContext.Provider>
  )
}

export function useHomePageContext() {
  const context = useContext(HomePageContext)
  if (context === undefined) {
    throw new Error("HomePage Context Error")
  }
  return context
}
