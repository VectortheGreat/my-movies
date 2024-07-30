import { router } from "expo-router"
import { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Button, Searchbar, Text } from "react-native-paper"
import ExploreSectionSection from "./sub_components/ExploreSection"
export default function ExploreScreen() {
  const hideSiteMap = true
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = useState<any>([])
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Movie 1",
        image:
          "https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg"
      },
      {
        id: 2,
        title: "Movie 2",
        image:
          "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg"
      },
      {
        id: 3,
        title: "Movie 3",
        image:
          "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg"
      }
    ])
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 40
      }}
    >
      <GestureHandlerRootView>
        <ScrollView>
          <Button
            mode="contained"
            onPress={() => router.push("_sitemap")}
            style={{ display: hideSiteMap ? "none" : "flex" }}
          >
            Site Map
          </Button>
          <View style={{ gap: 10 }}>
            <Text style={styles.title}>Find Movies, Tv series, and more..</Text>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              onSubmitEditing={() => console.log("Search")}
            />
            <ExploreSectionSection data={data} />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", padding: 2 }
})
