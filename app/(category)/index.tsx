import { router } from "expo-router"
import {
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
export default function CategoryScreen() {
  const hideSiteMap = false
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
              <CarouselSection title="Trending" data={data} />
              <CarouselSection title="Discover Global" data={data} />
              <CarouselSection title="Discover Local" data={data} />
            </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

type CarouselSectionProps = {
  title: string
  data: {
    id: number
    title: string
    image: string
  }[]
}

function CarouselSection({ title, data }: CarouselSectionProps) {
  const width = Dimensions.get("window").width
  return (
    <View style={{ marginVertical: 10, flex: 1 }}>
      <Text>{title}</Text>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        renderItem={({ index }) => (
          <Image
            source={{ uri: data[index].image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 30,
              objectFit: "cover"
            }}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", padding: 2 },
  carouselContainer: {
    backgroundColor: "red",
    margin: 0
  }
})
