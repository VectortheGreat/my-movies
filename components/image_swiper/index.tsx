import React from "react"
import { Dimensions, Image, View } from "react-native"
import Carousel from "react-native-reanimated-carousel"

type ImageSwiperProps = {
  images: string[]
  showPagination?: boolean
  showButtons?: boolean
  autoplay?: boolean
  autoplayTimeout?: number
}

export const ImageSwiper = ({
  images,
  showPagination = false,
  showButtons = false,
  autoplay = false,
  autoplayTimeout = 5
}: ImageSwiperProps) => {
  const width = Dimensions.get("window").width
  return (
    <Carousel
      mode="parallax"
      key={images.length}
      pagingEnabled={showPagination}
      width={width}
      height={width / 1.3}
      autoPlay={autoplay}
      data={images}
      loop
      scrollAnimationDuration={1000}
      //   onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index, item }) => (
        <View key={index} style={{ flex: 1 }}>
          <Image
            src={item}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 30
            }}
          />
        </View>
      )}
    />
  )
}
