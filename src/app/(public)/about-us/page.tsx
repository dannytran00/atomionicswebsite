import React from 'react'
import type { Metadata } from 'next'
import FAQ from './faq'
import Media from './media'
import Domain from './domain'
import AppLayout from '~/components/layout'
import { handleFetch } from '~/services/public'
import { groupByAdvisor, groupDataBySection } from '~/helpers/utils'
import MediaWrapper from '~/components/media'

export const metadata: Metadata = {
  title: 'About Us',
  description: '',
}

export default async function About() {
  const aboutData = await handleFetch('content', {
    page: 'about us',
    active: true,
  })
  const mediaData = await handleFetch('media', {
    location: 'about us',
    active: true,
    category: 'cover',
  })
  const teamData = await handleFetch('team', { active: true })
  const media = await handleFetch('media', {
    active: true,
    category: 'social media',
  })

  const groupedBySection = groupDataBySection(aboutData)
  const groupedByAdvisor = groupByAdvisor(teamData)

  return (
    <AppLayout>
      <main>
        <div className="bg-gradient-to-b from-black to-[#222222] pt-10 lg:pt-24 pb-10 lg:px-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" max-w-[328.24px] lg:max-w-[1042px] mx-auto text-zinc-100"
          >
            <div className="px-1 lg:px-0">
              <h1 className="m-0 text-2xl lg:text-4xl font-bold">
                {groupedBySection?.cover[0]?.title}
              </h1>
              <div
                className="text-justify text-xs lg:text-2xl font-light mt-4 lg:mt-10"
                dangerouslySetInnerHTML={{
                  __html: groupedBySection?.cover[0]?.description || '',
                }}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6 lg:mt-24">
              {!!mediaData?.length &&
                mediaData?.map((v: any, i: any) => (
                  <div key={i}>
                    <MediaWrapper
                      data={v?.name}
                      className="h-[9.725rem] lg:h-[15.67rem] w-full object-cover rounded"
                    />
                    <div className="text-center text-[0.543rem] lg:text-sm font-light mt-3 lg:mt-5">
                      {v.description || ''}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="5"
          className="max-w-[332px] lg:max-w-[1042px] mx-auto space-y-11 pb-7 pt-14 lg:py-24"
        >
          <div className="text-center pb-10    lg:!p-0">
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 list-none">
              {!!groupedBySection?.second?.length &&
                groupedBySection?.second?.map((v: any, i: any) => (
                  <div key={i}>
                    <div className="bg-[#F8F8F8] p-8 lg:pt-16 lg:pb-10 lg:px-7 rounded-xl zoom-scale-105-fast">
                      <div className="h-[6.789rem] lg:max-h-[16.875rem]">
                        <MediaWrapper
                          className="h-[6.2rem] lg:h-[6.8rem] w-auto mx-auto"
                          data={v?.image}
                        />
                      </div>
                      <p className="text-red-700 lg:text-zinc-800 text-[1.317rem] lg:text-[1.72rem] font-bold mt-7">
                        {v.title}
                      </p>
                      <div className="text-stone-500 text-[0.658rem] lg:text-sm mt-1 lg:mt-4">
                        {v.description}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-black to-[#1B1B1B] pt-12 pb-10 lg:pb-28">
          <div className="max-w-[320px] lg:max-w-[1221px] mx-auto text-center text-neutral-200">
            <div
              className="text-center text-[1.438rem] lg:text-4xl font-extrabold"
              dangerouslySetInnerHTML={{
                __html: groupedBySection?.third[0]?.description || '',
              }}
            />

            <Domain data={groupedByAdvisor?.team} />
            <div className="">
              <h2 className="text-center text-2xl lg:text-4xl font-extrabold ml-5 mt-20">
                Our Advisors
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4  mt-12 text-center gap-x-5 lg:gap-x-0 gap-y-8 lg:gap-y-10">
                {!!groupedByAdvisor?.advisor?.length &&
                  groupedByAdvisor?.advisor?.map((v: any, i: number) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay="2"
                    >
                      <div className="w-[9.319rem] h-[9.319rem] lg:w-[14.6rem] lg:h-[14.6rem] mx-auto  rounded-full border-2 lg:border-4 border-red-900">
                        <MediaWrapper
                          data={v?.photo}
                          className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 "
                        />
                      </div>
                      <p className="text-[9.32px] lg:text-lg mt-1 lg:mt-4">
                        {v.name}{' '}
                      </p>
                      <p className="text-[7.25px] lg:text-sm font-bold">
                        {v.position}{' '}
                      </p>
                      <p className="text-stone-300 text-[6.22px] lg:text-xs font-light mt-0.5">
                        {v.education || ''}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <Media
            data={media || []}
            title={groupedBySection?.media[0]?.title || ''}
            description={groupedBySection?.media[0]?.description || ''}
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-[320px] lg:max-w-[74.27rem] mx-auto pb-6 pt-3 lg:py-20 text-zinc-800 lg:space-y-8"
          >
            <h2 className="hidden lg:block text-4xl font-bold ml-4">
              {groupedBySection?.faq[0]?.description || ''}
            </h2>
            <h2 className="lg:hidden text-2xl  font-bold ml-1">
              {groupedBySection?.faq[0]?.title || ''}
            </h2>
            <FAQ data={groupedBySection?.faq_list} />
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
