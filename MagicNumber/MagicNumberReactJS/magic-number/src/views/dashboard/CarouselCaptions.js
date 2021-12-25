import { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/09.jpg'
import sliderImage2 from '@src/assets/images/slider/08.jpg'
import sliderImage3 from '@src/assets/images/slider/10.jpg'

const images = [
  {
    src: "https://i.pinimg.com/originals/8f/ae/a4/8faea4c77bf07ec467306c0a1ecc356d.jpg",
    id: 1,
    header: 'Sứ mệnh của chúng tôi',
    caption:
      'Giúp các bạn tìm ra con số của mình, từ đó hiểu bản thân hơn và cải thiện bản thân từng ngày'
    
  },
  {
    src: "https://static.wixstatic.com/media/d673d3_fc4de5291df44b2083ab5a2c894879de~mv2.png/v1/fill/w_980,h_483,al_c,usm_0.66_1.00_0.01/d673d3_fc4de5291df44b2083ab5a2c894879de~mv2.png",
    id: 2,
    header: 'Con số của bạn là gì?',
    caption:
      'Khám phá bản thân qua ý nghĩa các con số'
  },
  {
    src: "https://motionarray.imgix.net/preview-90839-RXPKHz9OAh-high_0002.jpg",
    id: 3,
    header: '4 đỉnh cao của đời người',
    caption:
      'Bất kì ai cũng có 4 đỉnh cao trong cuộc đời, hãy khám phá 4 đỉnh cao của riêng bạn!'
  }
]

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} alt={item.id} style={{ width: '100%', maxHeight: '550px'}} />
        <CarouselCaption captionText={item.caption} captionHeader={<span className='text-white'>{item.header}</span>} />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} keyboard={false}>
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
      <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
    </Carousel>
  )
}

export default CarouselCaptions
