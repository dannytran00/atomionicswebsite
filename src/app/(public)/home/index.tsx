import Button from '~/components/button'
import Link from 'next/link'
import GravioSolution3 from './gravioSolution3'
import AppLayout from '~/components/layout'
import { handleFetch } from '~/services/public'
import { groupDataBySection } from '~/helpers/utils'
import MediaWrapper from '~/components/media'

export default async function Home() {
  const homeData = await handleFetch('content', { page: 'home', active: true })
  const investorData = await handleFetch('media', {
    category: 'investor',
    active: true,
  })

  const groupedBySection = groupDataBySection(homeData)

  return (
    <AppLayout>
      <main>
        <section className="pt-10 pb-5 lg:pb-[100px] bg-gradient-to-r to-[#232323] from-50% from-[#0C0C0C] text-white -mt-1 lg:-mt-0">
          <div className="w-wrap grid grid-cols-1 lg:grid-cols-2 items-center place-items-center  ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative z-10 "
            >
              {groupedBySection?.cover[0]?.image && (
                <MediaWrapper
                  className="w-[80%] lg:w-auto h-auto ml-auto lg:ml-0 -mt-5 lg:-mt-0 z-10 zoom-scale-105-fast "
                  alt="cover"
                  data={groupedBySection?.cover[0]?.image}
                />
              )}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="order-first px-[40px] lg:order-last lg:pl-[56px] space-y-5"
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: groupedBySection?.cover[0]?.title || '',
                }}
                className="m-0 text-[2rem] lg:text-[3rem] xl:text-[4rem] lg:leading-[5rem] font-bold "
              ></h1>

              <h2
                dangerouslySetInnerHTML={{
                  __html: groupedBySection?.cover[0]?.description || '',
                }}
                className="text-sm lg:text-[1.375rem] lg:leading-[2rem]"
              ></h2>
              <Link href="/our-solution">
                <Button className="mt-8 hover:bg-red-700 zoom-scale-110-fast text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="w-wrap pt-[57px] pb-8 lg:pb-[84px]  lg:px-20 space-y-10 text-center ">
            <h4
              dangerouslySetInnerHTML={{
                __html: groupedBySection?.second[0]?.title || '',
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-zinc-800 text-[1.375rem] lg:text-4xl font-semibold px-7 lg:px-0 "
            >
              {/* How can Atomionics enable the energy transition? */}
            </h4>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="flex items-center gap-5 lg:max-w-[1024px] mx-5 lg:mx-auto p-[17px] lg:py-5 lg:px-[50px] bg-neutral-50 rounded-2xl border zoom-scale-105-fast ">
                {groupedBySection?.second[0]?.image && (
                  <MediaWrapper
                    className="w-[1.813rem] h-[1.813rem] lg:w-[3.25rem] lg:h-[3.25rem]"
                    alt="pinpoint"
                    data={groupedBySection?.second[0]?.image}
                  />
                )}
                <div
                  className="text-stone-500 text-xs lg:text-2xl text-start lg:text-center"
                  dangerouslySetInnerHTML={{
                    __html: groupedBySection?.second[0]?.description || '',
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {!!groupedBySection?.second?.length &&
                groupedBySection?.second?.slice(1)?.map((v: any, i: any) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-duration={(i + 1) * 500}
                  >
                    <div className="w-[60%] lg:w-auto mx-auto bg-neutral-50 rounded-2xl px-6 lg:px-[20px] xl:px-[54px] py-[39px] space-y-5 hover:border zoom-scale-105-fast  hover:shadow-lg">
                      <MediaWrapper
                        className="h-[3.125rem] lg:h-[5.625rem] w-auto mx-auto"
                        data={v.image}
                      />
                      <div className=" text-zinc-800">
                        <p className="text-md lg:text-xl font-bold ">
                          {v.title}{' '}
                        </p>
                        <p className="text-sm lg:text-lg">{v.sub} </p>
                      </div>
                      <p className="text-stone-500 text-xs lg:text-lg xl:text-xl">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-black to-[#1B1B1B]  ">
          <div className="w-wrap  pt-8 lg:pt-[90px] pb-[58px] lg:pb-[78px]">
            <div className="px-10 lg:max-w-[1348px] xl:pr-[121px] mx-auto">
              <div className="flex flex-col lg:grid grid-cols-11 lg:items-center gap-10">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="lg:hidden text-neutral-100 space-y-1"
                >
                  <div className="flex items-center gap-2 text-[2rem] lg:text-[2.375rem] font-bold">
                    {groupedBySection?.third[1]?.title}
                    {groupedBySection?.third[1]?.image && (
                      <MediaWrapper
                        className="h-8 lg:h-8 w-auto mb-1"
                        data={groupedBySection?.third[1]?.image}
                      />
                    )}
                  </div>
                  <div className="font-medium text-sm lg:text-[1.688rem]">
                    {groupedBySection?.third[1]?.description}
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="col-span-5"
                >
                  {groupedBySection?.third[0]?.image && (
                    <MediaWrapper
                      className="mt-7 zoom-scale-105-fast "
                      data={groupedBySection?.third[0]?.image}
                    />
                  )}
                </div>
                <div className="col-span-6 space-y-5">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="hidden lg:flex items-center gap-2 text-neutral-100 text-[2rem] lg:text-[2.1rem] xl:text-[2.375rem] font-bold"
                  >
                    {groupedBySection?.third[1]?.title}
                    {groupedBySection?.third[1]?.image && (
                      <MediaWrapper
                        className="h-[29px] lg:h-9 w-auto mb-1.5"
                        data={groupedBySection?.third[1]?.image}
                      />
                    )}

                    <span className="font-medium lg:text-xl xl:text-[1.688rem]">
                      - {groupedBySection?.third[1]?.description}
                    </span>
                  </div>
                  {!!groupedBySection?.third_map?.length &&
                    groupedBySection?.third_map?.map((v: any, i: any) => (
                      <div data-aos="fade-up" data-aos-duration="1000" key={i}>
                        <div className="flex items-center gap-3 lg:gap-3">
                          <div className="bg-neutral-500 w-[0.375rem] h-[0.375rem] rounded-sm" />
                          <h6 className="text-zinc-100 text-sm lg:text-xl font-bold">
                            {v.title}
                          </h6>
                        </div>
                        <p className="pl-4 lg:pl-4 text-neutral-200 text-xs lg:text-lg ">
                          {v.description}
                        </p>
                      </div>
                    ))}
                  <GravioSolution3 data={groupedBySection?.third_map_image} />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-5 mt-[60px] lg:mt-[108px]">
                {!!groupedBySection?.third_map_second?.length &&
                  groupedBySection?.third_map_second.map((v: any, i: any) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration={(i + 1) * 500}
                      className="space-y-2 lg:space-y-1"
                    >
                      <div className="flex gap-4 lg:gap-3 items-center">
                        <span className="w-[0.375rem] h-[0.375rem] bg-red-700" />
                        <h6 className="text-neutral-100 text-sm lg:text-2xl ">
                          {v.title}
                        </h6>
                      </div>
                      <p className="pl-5 lg:pl-4 text-white text-xs lg:text-lg font-light">
                        {v.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:px-10 max-w-[291px] lg:max-w-[1305px]  mx-auto  mt-12 lg:mt-20  space-y-10 text-center"
            >
              <h3 className="flex flex-col lg:flex-row lg:items-end justify-center gap-2 text-gray-200 text-[1.875rem] lg:text-4xl font-bold">
                <span className="flex items-center justify-center gap-2">
                  {groupedBySection?.third_bottom[0]?.title}
                  {groupedBySection?.third_bottom[0]?.image && (
                    <MediaWrapper
                      className="h-7 lg:h-9 w-auto mb-1"
                      data={groupedBySection?.third_bottom[0]?.image}
                    />
                  )}
                </span>
                <span>{groupedBySection?.third_bottom[0]?.description}</span>
              </h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: groupedBySection?.third_bottom[1]?.description || '',
                }}
                className="text-zinc-100 text-sm lg:text-2xl "
              ></p>
              <Link href="/our-solution">
                <Button className="mt-10 hover:bg-red-700 zoom-scale-110-fast text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="w-wrap p-10 text-center space-y-14">
            <h5
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-zinc-800 text-2xl lg:text-4xl font-bold"
            >
              Our Investors
            </h5>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 lg:gap-14"
            >
              {!!investorData?.length &&
                investorData?.map((v: any, i: any) => (
                  <a
                    href={v.link}
                    key={i}
                    target={v.link == '#' ? '' : '_blank'}
                  >
                    <MediaWrapper
                      data={v.name}
                      className={`w-[3.75rem] lg:w-[7rem] h-auto`}
                    />
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  )
}
