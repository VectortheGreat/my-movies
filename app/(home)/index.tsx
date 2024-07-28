import { router } from "expo-router"
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  const hideSiteMap = true
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView>
        <View>
          <Button
            mode="contained"
            onPress={() => router.push("_sitemap")}
            style={{ display: hideSiteMap ? "none" : "flex" }}
          >
            Site Map
          </Button>
          <Text style={styles.title}>My Movies</Text>
          <View style={{ padding: 20 }}>
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
          <View style={{ padding: 20 }}>
            <Text>Trending</Text>
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
          <View style={{ padding: 20 }}>
            <Text>Discover</Text>
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
          <View style={{ padding: 20 }}>
            <Text>Discover - Local</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", padding: 2 }
})
