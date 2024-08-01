import { router } from "expo-router"
import {
  Dimensions,
  Image,
  Pressable,
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
      title: "Star Wars Battlefront 2",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/485/771/desktop-wallpaper-hollywood-movie-group-live-action-movies.jpg"
    },
    {
      id: 2,
      title: "Hogwarts Legacy",
      image:
        "https://wallpapers.com/images/featured/movie-background-4saldhgir0h87q13.jpg"
    },
    {
      id: 3,
      title: "Game of Thrones",
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
            <View style={styles.homeImageContainer}>
              <Image
                src="https://images.wallpapersden.com/image/download/batman-cool-the-dark-knight_bmZpaWyUmZqaraWkpJRqbWdprWhna2k.jpg"
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
  function handleNavigatePage() {
    router.push(`detail/${data[0].id}`)
  }
  return (
    <View style={{ marginVertical: 10, flex: 1 }}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        autoPlay
        renderItem={({ index }) => (
          <Pressable onPress={handleNavigatePage}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: data[index].image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.imageText}>{data[index].title}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  carouselTitle: { paddingHorizontal: 10, fontWeight: "bold", fontSize: 20 },
  carouselContainer: {
    backgroundColor: "red",
    margin: 0
  },
  homeImageContainer: {
    paddingHorizontal: 20
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
    position: "relative"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    objectFit: "cover"
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center"
  },
  imageText: {
    color: "white",
    backgroundColor: "#969696",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    opacity: 0.7
  }
})
