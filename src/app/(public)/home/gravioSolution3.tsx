'use client'
import React, { useState } from 'react'
import MediaWrapper from '~/components/media'

export default function GravioSolution3({ data }: any) {
  const [hovered, setHovered] = useState(-1)

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid grid-cols-1 gap-2 lg:grid-cols-2 items-center text-white text-center "
    >
      {!!data?.length &&
        data.map((v: any, i: any) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            className={`${
              hovered > -1 && hovered !== i ? 'opacity-20' : ''
            } relative hover:z-20 hover:scale-105 hover:duration-300 `}
          >
            {/* <p className="absolute bottom-3 left-3 text-xs font-bold">{v.p}</p>
          <p className="absolute top-0 left-0 right-0 w-full h-[26%] text-[1.375rem] lg:text-xl font-bold flex items-center justify-center ">
            {v.title}
          </p> */}
            <MediaWrapper
              data={v.image}
              className={`h-[221px] lg:h-[241.41px] w-[276px] lg:w-[301.01px]`}
            />
            {/* <img
              src={`/images/${v.image}`}
              alt=""
              className={`h-[241.41px] w-[301.01px]`}
            /> */}
          </div>
        ))}
    </div>
  )
}
