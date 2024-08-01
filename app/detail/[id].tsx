import { useGlobalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Divider, Text } from "react-native-paper"
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
          <View style={{ gap: 10 }}>
            <View>
              <Image
                src={data.image}
                style={{
                  width: "100%",
                  height: 200
                }}
              />
              <Text style={styles.title}>{data.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ padding: 10 }}>152 minutes</Text>
                <Text style={{ padding: 10 }}>7.10(IMDB)</Text>
              </View>
            </View>
            <Divider />
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ padding: 10 }}>Release Date</Text>
                <Text style={{ padding: 10 }}>01-01-2022</Text>
              </View>
              <View>
                <Text style={{ padding: 10 }}>Genre</Text>
                <View style={{ flexDirection: "row", gap: 6 }}>
                  <Text
                    style={{
                      padding: 10,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 5,
                      shadowColor: "black"
                    }}
                  >
                    Action
                  </Text>
                  <Text
                    style={{
                      padding: 10,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 5,
                      shadowColor: "black"
                    }}
                  >
                    Action
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ padding: 10 }}>Synopsis</Text>
              <Text style={{ padding: 10 }}>
                A listless Wade Wilson toils away in civilian life with his days
                as the morally flexible mercenary, Deadpool, behind him. But
                when his homeworld faces an existential threat, Wade must
                reluctantly suit-up again with an even more reluctant Wolverine.
              </Text>
            </View>
            <CarouselSection title="Related Movies" data={[data]} />
            <CarouselSection title="Recommendations" data={[data]} />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", padding: 10 },
  carouselContainer: {
    backgroundColor: "red",
    margin: 0
  }
})
