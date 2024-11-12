import React from 'react'
import type { Metadata } from 'next'

import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BsHexagon } from 'react-icons/bs'

import AppLayout from '~/components/layout'
import { handleFetch } from '~/services/public'
import { groupDataBySection } from '~/helpers/utils'
import MediaWrapper from '~/components/media'

export const metadata: Metadata = {
  title: 'Careers',
  description: '',
}

export default async function Careers() {
  const mediaData = await handleFetch('media', {
    location: 'careers',
    active: true,
  })
  const socialData = await handleFetch('social', {
    location: 'careers',
    active: true,
  })
  const commentData = await handleFetch('comment', { active: true })

  const careersData = await handleFetch('content', {
    page: 'careers',
    active: true,
  })
  const groupedBySection = groupDataBySection(careersData)
  return (
    <AppLayout footer={{ light: true }}>
      <main>
        <div className="bg-[#0C0C0C] -mt-1 lg:-mt-0">
          <div className=" pt-7  lg:py-16 lg:space-y-16 text-center text-neutral-50">
            <div className=" mx-auto  lg:w-wrap">
              {!!mediaData?.length && (
                <MediaWrapper
                  className="w-[17.843rem] h-[9rem] lg:w-[30rem] lg:h-[11.5rem] mx-auto"
                  data={mediaData[0]?.name}
                />
              )}
              <ul className="flex flex-col lg:flex-row  lg:justify-between    w-full max-w-[1075px] mx-auto list-none gap-10 lg:gap-0 mt-5">
                {!!groupedBySection?.cover?.length &&
                  groupedBySection?.cover?.map((v: any, i: any) => (
                    <li
                      key={i}
                      data-aos="zoom-in"
                      data-aos-duration={500 + i * 100}
                      className="max-w-[248.39px] lg:max-w-[289.37px] mx-auto w-full space-y-3 flex flex-col"
                    >
                      <div className="grow w-[156.73px] lg:w-[70%] py-[47px] mx-auto bg-[#1F1F1F] border border-[#333333] rounded-xl flex items-center justify-center">
                        <MediaWrapper
                          data={v?.image}
                          className="w-[3.375rem] h-auto lg:w-[40%] lg:h-auto"
                        />
                      </div>
                      <div className="w-full bg-[#141414] border border-[#333333] rounded-xl py-5 space-y-2">
                        <div className="lg:text-lg font-bold ">{v.title} </div>
                        <div
                          className="text-xs lg:text-base text-neutral-400"
                          dangerouslySetInnerHTML={{
                            __html: v.description || '',
                          }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative w-full lg:max-w-[75.75rem] mx-auto mt-12 lg:mt-4"
            >
              {!!mediaData?.length && (
                <MediaWrapper
                  data={mediaData && mediaData[1]?.name}
                  className="w-full  h-auto"
                />
              )}
              <p className="w-full h-full absolute bottom-0 flex items-end justify-center pb-5 lg:pb-10 text-sm lg:!text-2xl font-semibold bg-gradient-to-t from-black  to-transparent  ">
                <span className="max-w-[263px] lg:max-w-none">
                  {mediaData && mediaData[1]?.description}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#EEEEEE] py-16">
            <div className="max-w-[304px] lg:max-w-[1213px] mx-auto space-y-11 ">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="!text-2xl lg:!text-4xl flex flex-col lg:flex-row lg:gap-2"
              >
                <div className="font-bold">
                  {groupedBySection?.second[0]?.title}
                </div>
                <div>{groupedBySection?.second[0]?.description}</div>
              </div>
              <div className=" lg:w-auto  grid grid-cols-1 lg:grid-cols-2 gap-3 list-none">
                {!!groupedBySection?.second?.length &&
                  groupedBySection?.second?.splice(1)?.map((v: any, i: any) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="bg-[#F8F8F8] rounded-xl py-10"
                    >
                      <div className="h-[8.41rem] lg:h-[16.875rem]">
                        <MediaWrapper
                          data={v?.image}
                          className="h-full w-auto mx-auto zoom-scale-110-fast"
                        />
                      </div>
                      <div className="px-7 mt-5">
                        <p className="text-red-700 text-xs lg:!text-2xl font-bold ">
                          0{i + 1}. {v?.title}
                        </p>
                        <p className="text-[0.625rem] lg:text-lg font-extralight mt-3">
                          {v?.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className=" max-w-[304px] lg:max-w-[1213px] mx-auto space-y-11 py-16 ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-[969px] mx-auto"
            >
              <div className="flex items-center justify-between">
                <div className="text-zinc-800 text-2xl lg:text-4xl flex flex-col lg:flex-row lg:gap-2">
                  <div className="font-bold">
                    {groupedBySection?.third[0]?.title || ''}
                  </div>
                  <div>{groupedBySection?.third[0]?.description || ''}</div>
                </div>
              </div>
              <iframe
                allowFullScreen
                src={!!socialData?.length && socialData[0]?.link}
                className="w-full h-[141px] lg:h-[450px] rounded mt-5"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-black to-[#212121] py-10">
          <div className="max-w-[304px] lg:max-w-[1213px] mx-auto space-y-11 text-zinc-100">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" !text-2xl lg:!text-4xl font-bold"
            >
              {groupedBySection?.fourth[0]?.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-32 max-w-[1067px]  mx-auto px-10 lg:px-0">
              {!!groupedBySection?.fourth?.length &&
                groupedBySection?.fourth?.splice(1)?.map((v: any, i: any) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-duration={500 + i * 100}
                    className="space-y-3 lg:space-y-7 "
                  >
                    <div className=" bg-[#1F1F1F] rounded-xl h-[79px] lg:h-[157px] flex items-center justify-center zoom-scale-110-fast  ">
                      <MediaWrapper
                        data={v?.image}
                        className={`${
                          v?.title?.includes('Medical')
                            ? 'lg:h-[4.5rem] lg:w-[4.5rem]'
                            : 'lg:h-[4rem] lg:w-[4rem]'
                        } h-[3.3rem] w-[3.3rem]`}
                      />
                    </div>
                    <div className="text-center text-[0.563rem] lg:text-lg font-normal">
                      {v.title}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className=" bg-white py-12 lg:py-16">
          <div className="max-w-[304px] lg:max-w-[1213px] mx-auto space-y-7">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-zinc-800 !text-2xl lg:!text-4xl font-bold"
            >
              {groupedBySection?.fifth[0]?.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-10 text-justify">
              {!!commentData?.length &&
                commentData?.map((v: any, i: any) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex flex-col"
                  >
                    <BiSolidQuoteLeft className="relative text-[3.31rem] text-red-700 font-bold" />
                    <div className="grow ml-3 bg-[#FAFAFA] -mt-5 p-4 lg:p-10 rounded-lg space-y-5">
                      <div className="flex items-center gap-5 px-5">
                        <MediaWrapper
                          data={v?.photo}
                          className="h-[5.687rem] lg:h-[9.68rem] w-auto rounded-xl zoom-scale-110-fast"
                        />

                        <div>
                          <p className="font-bold text-[0.661rem] lg:text-lg mb-3">
                            {v.name}
                          </p>
                          <div className="text-[0.551rem] lg:text-base text-left whitespace-nowrap">
                            {v.position}{' '}
                          </div>
                          <div className="text-[0.551rem] lg:text-base text-left ">
                            {v.periode}{' '}
                          </div>
                        </div>
                      </div>
                      <div className="text-[0.551rem] lg:text-base">
                        <div
                          dangerouslySetInnerHTML={{ __html: v?.content || '' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black to-[#171717] py-16 text-white">
          <div className="max-w-[304px] lg:max-w-[1213px] mx-auto">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="!text-2xl lg:!text-4xl font-bold"
            >
              {groupedBySection?.sixth[0]?.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-neutral-50 text-xs lg:!text-2xl font-extralight mt-3"
              dangerouslySetInnerHTML={{
                __html: groupedBySection?.sixth[0]?.description || '',
              }}
            ></p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  lg:gap-3 mt-10">
              {!!groupedBySection?.sixth?.length &&
                groupedBySection?.sixth?.slice(1)?.map((v: any, i: any) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-duration={500 + i * 100}
                  >
                    <div className="relative flex gap-5 lg:gap-7 bg-gradient-to-l from-black to-[#171717] border border-zinc-800 rounded-lg p-5 zoom-scale-110-fast   !z-10 hover:!z-20">
                      <div className="relative w-[4.33rem] lg:w-[125px] h-[4.33rem] lg:h-[125px] flex items-center justify-center">
                        <BsHexagon className="absolute top-0 left-0 text-[4.33rem] lg:text-[7.813rem] text-[#212121]" />
                        <MediaWrapper
                          data={v?.image}
                          className="w-8 lg:w-[3.875rem] h-auto"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-3">
                        <p className="text-[0.776rem] lg:!text-2xl font-bold">
                          {v?.title}{' '}
                        </p>
                        <a href={v?.description} target="_blank">
                          <button className="w-[70px] h-[20px] lg:w-[126px] lg:h-11 text-[0.58rem] lg:text-lg font-bold rounded-3xl border-2 border-red-700 hover:bg-red-700 flex justify-center items-center zoom-scale-110-fast">
                            Apply now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
