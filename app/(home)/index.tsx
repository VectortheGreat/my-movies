import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: 10,
            paddingVertical: 10
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>CineCost</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  headerIcons: {
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  rightButtons: { width: 70, height: "50%", aspectRatio: 1 }
})
