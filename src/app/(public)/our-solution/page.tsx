import React from 'react'
import type { Metadata } from 'next'
import Slides from './slides'
import AppLayout from '~/components/layout'
import { handleFetch } from '~/services/public'
import { groupDataBySection } from '~/helpers/utils'
import MediaWrapper from '~/components/media'

export const metadata: Metadata = {
  title: 'Our-Solution',
  description: '',
}

export default async function OurSolution() {
  const ourSolutionData = await handleFetch('content', {
    page: 'our solution',
    active: true,
  })
  const socialData = await handleFetch('social', {
    location: 'our solution',
    active: true,
  })
  const slidesData = await handleFetch('media', {
    location: 'our solution',
    active: true,
  })

  const groupedBySection = groupDataBySection(ourSolutionData)

  return (
    <AppLayout footer={{ light: true }}>
      <main>
        <section className="bg-black -mt-1 lg:-mt-0">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-wrap pt-10 lg:pt-20 pl-[35px] lg:px-[195px] flex lg:flex-col  overflow-hidden lg:overflow-"
          >
            <div className="w-2/3 lg:w-auto relative z-10  flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 lg:gap-0">
              <div>
                <h1 className="m-0 text-[2.6rem] lg:text-[6.875rem]">
                  {groupedBySection?.cover[0]?.image && (
                    <MediaWrapper
                      data={groupedBySection?.cover[0]?.image}
                      className="h-[39px] lg:h-[99px] w-auto"
                    />
                  )}
                </h1>
                <div className="lg:w-[543.22px] text-white text-xs lg:text-4xl font-extralight mt-3">
                  {groupedBySection?.cover[0]?.description}
                </div>
              </div>
              {groupedBySection?.cover[1]?.image && (
                <MediaWrapper
                  data={groupedBySection?.cover[1]?.image}
                  className="w-[70%] lg:w-[27.5rem] h-auto zoom-scale-105-fast "
                />
              )}
            </div>
            <img
              src="/images/rings.svg"
              alt=""
              className="lg:rotate-90 h-[20.5rem] lg:h-[69.6rem] mx-auto w-auto -mr-12 lg:mx-auto lg:-mt-[26rem] overflow-hidden lg:overflow-visible "
            />
          </div>
        </section>
        <section className="bg-black min-h-20 -mt-1 lg:-mt-[32.8rem]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-wrap pb-[35px] lg:pb-[105px] pt-24 lg:pt-0"
          >
            <div className="relative text-neutral-50 text-center">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="relative max-w-[400px] lg:max-w-[1201px] mx-auto">
                  {!!slidesData?.length && <Slides data={slidesData} />}
                </div>
              </div>
              <h4
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-start lg:text-center text-xl lg:text-4xl mt-10 lg:mt-40 pl-[30px] lg:pl-0 "
              >
                {groupedBySection?.cover[2]?.title} <br className="lg:hidden" />
                <span className="font-bold">
                  {groupedBySection?.cover[2]?.description}
                </span>
              </h4>
              <iframe
                data-aos="fade-up"
                data-aos-duration="1000"
                allowFullScreen
                src={socialData && socialData[0]?.link}
                className="mx-auto rounded w-[20rem] lg:w-[68.5rem] h-[9rem] lg:h-[32.1rem] mt-7  shadow"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="w-wrap  py-16 lg:py-[90px] px-[32px] lg:px-[170px] space-y-10">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[1.68rem] lg:text-[3.125rem] text-center lg:text-start"
            >
              {groupedBySection?.second[0]?.image && (
                <MediaWrapper
                  data={groupedBySection?.second[0]?.image}
                  className="h-8 lg:h-10 w-auto mx-auto lg:mx-0"
                />
              )}
            </h4>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hidden lg:block text-xs lg:text-2xl text-justify "
            >
              {groupedBySection?.second[0]?.description}
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:hidden text-xs lg:text-2xl text-justify "
            >
              {groupedBySection?.second[0]?.description}

              {/* The first absolute quantum gravimeter optimized for moving-base
              applications. It enables application areas that were not feasible
              before by being quicker than classical relative gravimeters and
              more precise than airborne gravimeters. */}
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
              <div
                // data-aos="fade-right"
                data-aos="fade-up"
                data-aos-duration="1000"
                className="lg:space-y-10 lg:block flex flex-wrap justify-center w-full lg:w-auto "
              >
                {!!groupedBySection?.second?.length &&
                  groupedBySection?.second?.splice(2).map((v: any, i: any) => (
                    <div key={i} className="space-y-3 w-1/2">
                      <MediaWrapper
                        data={v.image}
                        className="w-auto lg:w-[5.1rem] h-[3.625rem] lg:h-auto mx-auto zoom-scale-105-fast  "
                      />
                      {/* <img
                        src={`/images/${v.image}`}
                        alt=""
                      /> */}
                      <p className="text-center text-neutral-800 text-[0.52rem]  lg:text-sm ">
                        {v.title}
                      </p>
                    </div>
                  ))}
              </div>
              <div
                // data-aos="fade-left"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                className="lg:w-[60%] h-auto "
              >
                {groupedBySection?.second[1]?.image && (
                  <MediaWrapper
                    className="w-full h-auto zoom-scale-105-fast "
                    data={groupedBySection?.second[1]?.image}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-black to-[#242424] ">
          <div className="w-wrap py-16 lg:pt-[88px] lg:pb-[112px] px-[32px] lg:px-[170px] space-y-12">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[2.9rem] font-black lg:font-extrabold italic "
            >
              <span className="text-gradient from-[#9B0A11] to-[#E74031] relative z-10 pr-2">
                ORE
              </span>
              <span className="text-[#B3B3B3] -ml-2">
                O<span className="not-italic pl-1 ">&trade;</span>
              </span>
            </h4>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:w-[760px] text-zinc-100 text-xs  lg:text-2xl font-light "
            >
              {groupedBySection?.third[0]?.description}
            </div>
            <div className="flex items-center justify-center flex-wrap lg:grid grid-cols-3 gap-5 px-5 lg:px-0">
              {!!groupedBySection?.third?.length &&
                groupedBySection?.third?.splice(1).map((v: any, i: any) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration={(i + 1) * 250}
                  >
                    <div className="flex flex-col justify-center items-center lg:block w-[248px] h-[191px] mx-auto lg:w-auto lg:h-auto bg-stone-900 border border-zinc-800 rounded-3xl space-y-7 lg:py-[66px] px-16 lg:px-0 hover:border hover:border-white zoom-scale-105-fast -fast">
                      <MediaWrapper
                        data={v.image}
                        className="w-auto h-[63px] lg:h-[5.19rem]  mx-auto"
                      />
                      <p className="text-center text-zinc-100 text-sm lg:text-2xl lg:w-[160px] mx-auto whitespace-normal">
                        {v.title}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  )
}
