import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Tabs } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"

import { useColorScheme } from "@/hooks/useColorScheme"
import { TabBarIcon } from "../components/navigation/TabBarIcon"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  console.log("Uygulama Re-Render Edildi")
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <Stack>
        <Stack.Screen
          name="(home)"
          options={{ headerShown: false, headerTitle: "Home" }}
        />
        <Stack.Screen
          name="(category)"
          options={{ headerShown: false, headerTitle: "Home" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      <Tabs>
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="(category)"
          options={{
            headerShown: false,

            title: "Category",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "book" : "book-outline"}
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="+not-found"
          options={{
            headerShown: false,
            title: "Not Found",
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            )
          }}
        />
      </Tabs>
    </ThemeProvider>
  )
}
