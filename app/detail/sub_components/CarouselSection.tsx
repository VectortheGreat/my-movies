import { router } from "expo-router"
import { Dimensions, Image, Pressable, View } from "react-native"
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

export default function CarouselSection({ title, data }: CarouselSectionProps) {
  const width = Dimensions.get("window").width
  function handleNavigatePage() {
    console.log(data)
    router.push(`detail/${data[0].id}`)
  }
  return (
    <View style={{ marginVertical: 10, flex: 1 }}>
      <Text style={{ paddingHorizontal: 10 }}>{title}</Text>
      <ImageCarousel
        width={width}
        height={width / 2.3}
        data={data}
        autoPlay
        renderItem={({ index }) => (
          <View>
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
          </View>
        )}
      />
    </View>
  )
}
