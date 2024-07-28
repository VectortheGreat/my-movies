import React, { createContext, useContext, useState } from "react"

export type AppContextProps = {
  users: any[]
  setUsers: (value: AppContextProps["users"]) => void
}

export const appContextDefaultValues: AppContextProps = {
  users: [],
  setUsers: () => {}
}

const AppContext = createContext(appContextDefaultValues)

export function AppContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [users, setUsers] = useState<AppContextProps["users"]>([])
  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValues,
        users,
        setUsers
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
