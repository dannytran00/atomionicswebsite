'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Navigation } from 'swiper'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const Slides = ({ data }: any) => {
  return (
    <>
      <div className="absolute mt-3 lg:mt-5 top-0 right-0 left-0 h-[171px] lg:!h-[411px] w-full flex items-center justify-center text-white">
        <AiOutlineArrowLeft className="swiper-button-prev slider-arrow z-10 text-[0.438rem] lg:text-[1.5rem] cursor-pointer mr-2 lg:mr-3" />
        <div className="w-[19rem] lg:w-[734.64px]" />
        <AiOutlineArrowLeft className="swiper-button-next slider-arrow z-10 text-[0.438rem] lg:text-[1.5rem] cursor-pointer rotate-180  " />
      </div>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect={'coverflow'}
        loop
        grabCursor
        centeredSlides
        slidesPerView={'auto'}
        breakpoints={{
          320: {
            // spaceBetween: 135,
            spaceBetween: 250,
          },
          // When window width is >= 480px
          480: {
            spaceBetween: 250,
          },
          768: {
            spaceBetween: 600,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 900,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={300}
      >
        {!!data?.length &&
          data?.map((video: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="h-full w-full">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className={`h-[171px] md lg:!h-[411px] w-full`}
                >
                  <source src={'/videos/' + video.name} type="video/mp4" />
                  <source src={'/videos/' + video.name} type="video/webm" />
                </video>

                <div className=" text-xs h-10 lg:text-2xl font-light mt-3 lg:mt-5 transition-all ease-in-out  !delay-0  duration-500 text-center !w-[257.77px] lg:!w-[734.64px] mx-auto !overflow-visible">
                  {video.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default Slides
