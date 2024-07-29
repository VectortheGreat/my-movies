import React from "react"
import Carousel, { TCarouselProps } from "react-native-reanimated-carousel"

type ImageSwiperProps = {
  data: {
    id: number
    title: string
    image: string
  }[]
  mode?: "parallax" | "horizontal-stack" | "vertical-stack"
} & TCarouselProps<any>

export const ImageCarousel = ({
  data,
  mode = "parallax",
  ...props
}: ImageSwiperProps) => {
  return (
    //@ts-ignore
    <Carousel
      mode={mode}
      key={data.length}
      width={props.width}
      height={props.height}
      data={data}
      loop
      scrollAnimationDuration={1000}
      //   onSnapToItem={(index) => console.log("current index:", index)}
      {...props}
      renderItem={props.renderItem}
      // renderItem={({ index, item }) => (
      //   <View key={index} style={{ flex: 1 }}>
      //     <Image
      //       src={item.image}
      //       style={{
      //         width: "100%",
      //         height: "100%",
      //         borderRadius: 30
      //       }}
      //     />
      //   </View>
      // )}
    />
  )
}
