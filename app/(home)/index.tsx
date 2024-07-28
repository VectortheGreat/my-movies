import { router } from "expo-router"
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { ImageSwiper } from "../../components/image_swiper"
export default function HomeScreen() {
  const hideSiteMap = true
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView>
        <Button
          mode="contained"
          onPress={() => router.push("_sitemap")}
          style={{ display: hideSiteMap ? "none" : "flex" }}
        >
          Site Map
        </Button>
        <Text style={styles.title}>My Movies</Text>
        <View>
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg"
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 20
            }}
          />
        </View>
        <View>
          <Text>Trending</Text>

          <ImageSwiper
            autoplay
            images={[
              "https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg",
              "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tOGp6thPMtXJmpwqlHbZlBms3w-jJrVGfQ&s"
            ]}
          />
        </View>
        <View>
          <Text>Discover</Text>
          <ImageSwiper
            showButtons
            showPagination
            images={[
              "https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg",
              "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tOGp6thPMtXJmpwqlHbZlBms3w-jJrVGfQ&s"
            ]}
          />
        </View>
        <View>
          <Text>Discover - Local</Text>
          <ImageSwiper
            images={[
              "https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg",
              "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tOGp6thPMtXJmpwqlHbZlBms3w-jJrVGfQ&s"
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", padding: 2 }
})
