'use client'

import React, { useEffect, useState } from 'react'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'
import MediaWrapper from '~/components/media'

const isDev = process.env.NODE_ENV == 'development'

export default function Media({ data, title, description }: any) {
  const [selected, setselected] = useState('linkedin-mobile.png')
  const [widgetLoaded, setwidgetLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.defer = true
    document.body.appendChild(script)
    setwidgetLoaded(true)
  }, [])

  useEffect(() => {
    if (widgetLoaded) {
      const links: any =
        document.querySelectorAll("a[href*='utm_campaign=free-widget']") || []
      if (links?.length) {
        for (const link of links) {
          link.removeAttribute('style')
          link.removeAttribute('class')
        }
      }
    }
  }, [widgetLoaded])

  const getSocialIcon = (category: any) => {
    if (category.name.includes('linkedin')) return <AiFillLinkedin />
    if (category.name.includes('twitter')) return <AiFillTwitterSquare />
    if (category.name.includes('instagram')) return <AiFillInstagram />
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-[320px] lg:max-w-[74.27rem] mx-auto py-6 lg:py-20 text-zinc-800 lg:space-y-8"
    >
      <div className="text-2xl lg:text-4xl font-bold">{title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        className="text-xs lg:text-2xl mt-3"
      />
      {!!data?.length && (
        <div>
          <div className="lg:hidden">
            <div className="flex gap-5 text-[25px] my-8">
              {data.map((v: any, i: number) => {
                return v.tag == 'mobile' ? (
                  <button
                    key={i}
                    onClick={() => setselected(v.name)}
                    className={`${
                      v.name?.includes(selected) ? 'bg-gray-200' : ''
                    } p-3 rounded`}
                  >
                    {getSocialIcon(v)}
                  </button>
                ) : null
              })}
            </div>
            <div className="w-full mb-10">
              {data.map((v: any, i: number) => {
                return (
                  v?.tag == 'mobile' &&
                  v?.name == selected && (
                    <a key={i} href={v?.link} target="_blank">
                      <MediaWrapper data={v?.name} className="w-full" />
                    </a>
                  )
                )
              })}
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-2 gap-20">
            {data.map((v: any, i: number) => {
              const isInstagram = v?.name?.includes('instagram')
              return (
                v?.tag !== 'mobile' && (
                  <div
                    key={i}
                    className={`w-full ${isInstagram ? 'col-span-2' : ''}`}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div
                      className="text-[21.94px] font-semibold ml-1 mb-3 capitalize"
                      dangerouslySetInnerHTML={{ __html: v?.description || '' }}
                    />
                    <a href={v?.link} target="_blank">
                      <MediaWrapper data={v?.name} className="w-full" />
                    </a>
                  </div>
                )
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
