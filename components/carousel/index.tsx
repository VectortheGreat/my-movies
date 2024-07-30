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
      {...props}
      renderItem={props.renderItem}
    />
  )
}
