import { appContextDefaultValues, AppContextProps } from "@/context/app_context"
import { createContext, useContext } from "react"

export type AuthLoginPageContextProps = AppContextProps

export const authLoginPageDefaultValues: AuthLoginPageContextProps = {
  ...appContextDefaultValues
}

const AuthLoginPageContext = createContext(authLoginPageDefaultValues)

export function AuthLoginPageContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <AuthLoginPageContext.Provider
      value={{
        ...authLoginPageDefaultValues
      }}
    >
      {props.children}
    </AuthLoginPageContext.Provider>
  )
}

export function useAuthLoginPageContext() {
  const context = useContext(AuthLoginPageContext)
  if (context === undefined) {
    throw new Error("AuthLoginPage Context Error")
  }
  return context
}
