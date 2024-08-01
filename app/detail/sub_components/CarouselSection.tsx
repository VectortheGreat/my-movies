import { router } from "expo-router"
import { Dimensions, Image, Pressable, StyleSheet } from "react-native"
import { ImageCarousel } from "../../../components/carousel"
import { ThemedText } from "../../../components/ThemedText"
import { ThemedView } from "../../../components/ThemedView"
type CarouselSectionProps = {
  title: string
  data: {
    id: number
    title: string
    image: string
  }[]
}
const width = Dimensions.get("window").width

export default function CarouselSection({ title, data }: CarouselSectionProps) {
  function handleNavigatePage() {
    console.log(data)
    router.push(`detail/${data[0].id}`)
  }
  return (
    <ThemedView style={{ marginVertical: 10, flex: 1 }}>
      <ThemedText
        style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: "bold" }}
      >
        {title}
      </ThemedText>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        autoPlay
        renderItem={({ index }) => (
          <ThemedView style={styles.carouselContainer}>
            <Pressable onPress={handleNavigatePage}>
              <Image
                source={{ uri: data[index].image }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 30,
                  objectFit: "cover"
                }}
              />
            </Pressable>
            <ThemedText style={styles.text}>{data[index].title}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  carouselContainer: { width, height: width / 2.3, marginHorizontal: 10 },
  text: {
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
})
