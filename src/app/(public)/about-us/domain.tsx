'use client'
import React, { useState } from 'react'
import MediaWrapper from '~/components/media'

export default function Domain({ data }: any) {
  const [isHovered, setIsHovered]: any = useState(null)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  mt-12 text-center gap-x-5 lg:gap-x-0 gap-y-8 lg:gap-y-10">
      {!!data?.length &&
        data?.map((v: any, i: any) => (
          <div
            key={i}
            // data-aos={(i + 1) % 2 == 0 ? 'flip-right' : 'flip-left'}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-[9.319rem] h-[9.319rem] lg:w-[14.6rem] lg:h-[14.6rem] mx-auto  rounded-full border-2 lg:border-4 border-red-900">
              <MediaWrapper
                className={`w-full h-full rounded-full object-cover img-transition `}
                data={v.photo}
                index={i}
                isHovered={isHovered}
                secondData={v.avatar}
                onMouseEnter={() => setIsHovered(i)}
                onClick={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
              />
            </div>
            <p className="text-[10.5px] lg:text-lg mt-1 lg:mt-4 whitespace-nowrap">
              {v.name}
            </p>
            <p className="text-[8.16px] lg:text-sm font-bold whitespace-nowrap">
              {v.position}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: v?.education || '' }}
              className="text-[7.05px] lg:text-xs mt-1 lg:mt-4 whitespace-nowrap"
            />
          </div>
        ))}
    </div>
  )
}
