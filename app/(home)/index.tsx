import { router } from "expo-router"
import { useRef } from "react"
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Button, Text } from "react-native-paper"
import { ImageCarousel } from "../../components/carousel"
export default function HomeScreen() {
  const hideSiteMap = true
  const data = [
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
  ]
  const scrollX = useRef(new Animated.Value(0)).current
  const width = Dimensions.get("window").width
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
            <ImageCarousel
              width={width}
              style={styles.carouselContainer}
              height={width / 1.3}
              data={data}
              renderItem={({ index }) => (
                <Image
                  source={{ uri: data[index].image }}
                  style={{ width: "100%", height: "100%", borderRadius: 30 }}
                />
              )}
            />
          </View>
          <View>
            <Text>Discover Global</Text>
            <ImageCarousel
              width={width}
              height={width / 1.3}
              data={data}
              style={styles.carouselContainer}
              renderItem={({ index }) => (
                <Image
                  source={{ uri: data[index].image }}
                  style={{ width: "100%", height: "100%", borderRadius: 30 }}
                />
              )}
            />
          </View>
          <View>
            <Text>Discover Local</Text>
            <ImageCarousel
              width={width}
              style={styles.carouselContainer}
              height={width / 1.3}
              data={data}
              renderItem={({ index }) => (
                <Image
                  source={{ uri: data[index].image }}
                  style={{ width: "100%", height: "100%", borderRadius: 30 }}
                />
              )}
            />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", padding: 2 },
  carouselContainer: {
    backgroundColor: "red",
    margin: 0
  }
})
