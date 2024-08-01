import { router } from "expo-router"
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { ImageCarousel } from "../../../components/carousel"
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
    <View style={{ marginVertical: 10, flex: 1 }}>
      <Text style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        autoPlay
        renderItem={({ index }) => (
          <View style={styles.carouselContainer}>
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
            <Text style={styles.text}>{data[index].title}</Text>
          </View>
        )}
      />
    </View>
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
