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
import { Button } from "react-native-paper"
import { ImageCarousel } from "../../components/carousel"
import { ThemedText } from "../../components/ThemedText"
import { ThemedView } from "../../components/ThemedView"
import { AppContextProps, useAppContext } from "../../context/app_context"
export default function HomeScreen() {
  const hideSiteMap = true
  const { trendingMovies, discoverLocalMovies, discoverGlobalMovies } =
    useAppContext()
  console.log("trendingMovies", trendingMovies)
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <GestureHandlerRootView>
        <ScrollView>
          <Button
            mode="contained"
            onPress={() => router.push("_sitemap")}
            style={{ display: hideSiteMap ? "none" : "flex" }}
          >
            Site Map
          </Button>
          <ThemedView style={{ gap: 10 }}>
            <ThemedText style={styles.title}>My Movies</ThemedText>
            <ThemedView style={styles.homeImageContainer}>
              <Image
                src="https://images.wallpapersden.com/image/download/batman-cool-the-dark-knight_bmZpaWyUmZqaraWkpJRqbWdprWhna2k.jpg"
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 20
                }}
              />
            </ThemedView>
            <ThemedView>
              <CarouselSection title="Trending" data={trendingMovies} />
              <CarouselSection
                title="Discover Global"
                data={discoverGlobalMovies}
              />
              <CarouselSection
                title="Discover Local"
                data={discoverLocalMovies}
              />
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

type CarouselSectionProps = {
  title: string
  data: AppContextProps["trendingMovies"]
}

function CarouselSection({ title, data }: CarouselSectionProps) {
  const width = Dimensions.get("window").width
  function handleNavigatePage() {
    router.push(`detail/${data[0].id}`)
  }
  return (
    <ThemedView style={{ marginVertical: 10, flex: 1 }}>
      <ThemedText style={styles.carouselTitle}>{title}</ThemedText>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        autoPlay
        renderItem={({ index }) => (
          <Pressable onPress={handleNavigatePage}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: data[index].poster_path }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <ThemedText style={styles.imageText}>
                  {data[index].original_title}
                </ThemedText>
              </View>
            </View>
          </Pressable>
        )}
      />
    </ThemedView>
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
