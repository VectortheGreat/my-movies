import { Image, StyleSheet } from "react-native"
import { ThemedText } from "../../../components/ThemedText"
import { ThemedView } from "../../../components/ThemedView"

type CarouselSectionProps = {
  data: {
    id: number
    title: string
    image: string
  }[]
}

export default function ExploreSectionSection({ data }: CarouselSectionProps) {
  const rows = Math.ceil(data.length / 2)

  return (
    <ThemedView style={styles.container}>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <ThemedView key={rowIndex} style={styles.row}>
          {data.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
            <ThemedView key={item.id} style={styles.itemContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <ThemedText style={styles.exploreTitle}>{item.title}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
      ))}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  exploreTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 2
  },
  container: {
    flexDirection: "column",
    padding: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  itemContainer: {
    width: "48%"
  },
  image: {
    height: 200,
    borderRadius: 20
  }
})
