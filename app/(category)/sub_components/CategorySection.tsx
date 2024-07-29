import { Image, StyleSheet, Text, View } from "react-native"

type CarouselSectionProps = {
  data: {
    id: number
    title: string
    image: string
  }[]
}

export default function CategorySection({ data }: CarouselSectionProps) {
  const rows = Math.ceil(data.length / 2)

  return (
    <View style={styles.container}>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {data.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryTitle: {
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
