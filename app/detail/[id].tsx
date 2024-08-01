import { EvilIcons, FontAwesome } from "@expo/vector-icons"
import { useGlobalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Divider } from "react-native-paper"
import { ThemedText } from "../../components/ThemedText"
import { ThemedView } from "../../components/ThemedView"
import CarouselSection from "./sub_components/CarouselSection"
export default function DetailScreen() {
  const { id } = useGlobalSearchParams()
  const data = {
    id: 1,
    title: "Star Wars: The Last Jedi",
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1A17D0D449D5A9E24FD41D3A849B47FF902363B58410EBF2EC49349D62C7AEBF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 40
      }}
    >
      <GestureHandlerRootView>
        <ScrollView>
          <ThemedView style={{ gap: 10 }}>
            <ThemedView>
              <Image
                src={data.image}
                style={{
                  width: "100%",
                  height: 200
                }}
              />
              <ThemedText style={styles.title}>{data.title}</ThemedText>
              <ThemedView style={styles.infoContainer}>
                <ThemedView style={styles.iconTextContainer}>
                  <ThemedText>152 minutes</ThemedText>
                  <EvilIcons name="clock" size={20} color="black" />
                </ThemedView>
                <ThemedView style={styles.iconTextContainer}>
                  <ThemedText>7.10(IMDB)</ThemedText>
                  <FontAwesome name="star" size={20} color="black" />
                </ThemedView>
              </ThemedView>
            </ThemedView>
            <Divider />
            <ThemedView style={styles.infoContainer}>
              <ThemedView style={styles.dateGenreContainer}>
                <ThemedText>Release Date</ThemedText>
                <ThemedText>01-01-2022</ThemedText>
              </ThemedView>
              <ThemedView style={styles.dateGenreContainer}>
                <ThemedText style={{ textAlign: "center" }}>Genre</ThemedText>
                <ThemedView style={{ flexDirection: "row", gap: 6 }}>
                  <ThemedText style={styles.genre}>Action</ThemedText>
                  <ThemedText style={styles.genre}>Action</ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
            <ThemedView style={{ paddingHorizontal: 15, gap: 10 }}>
              <ThemedText style={styles.subtitle}>Synopsis</ThemedText>
              <ThemedText>
                A listless Wade Wilson toils away in civilian life with his days
                as the morally flexible mercenary, Deadpool, behind him. But
                when his homeworld faces an existential threat, Wade must
                reluctantly suit-up again with an even more reluctant Wolverine.
              </ThemedText>
            </ThemedView>
            <CarouselSection title="Related Movies" data={[data]} />
            <CarouselSection title="Recommendations" data={[data]} />
          </ThemedView>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", padding: 10, textAlign: "center" },
  infoContainer: { flexDirection: "row", justifyContent: "space-around" },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 2
  },
  dateGenreContainer: { gap: 10, textAlign: "center" },
  genre: {
    padding: 9,
    backgroundColor: "#262626",
    color: "white",
    borderRadius: 20,
    shadowColor: "black"
  },
  subtitle: { fontSize: 20, fontWeight: "bold" }
})
