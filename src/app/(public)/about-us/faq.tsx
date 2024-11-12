'use client'

import React, { useState, useEffect } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function FAQ({ data }: any) {
  const [loading, setLoading] = useState(false)
  // handle hdyration UI
  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <>
      {loading && (
        <Accordion.Root
          className="mt-8"
          type="single"
          defaultValue={'item0'}
          collapsible
        >
          {!!data?.length &&
            data?.map((v: any, i: any) => (
              <Accordion.Item
                key={i}
                value={`item` + i}
                className="data-[state=open]:bg-[#F5F5F5] data-[state=open]:mb-5 rounded-xl p-5"
              >
                <Accordion.Header className="text-sm lg:text-2xl ">
                  <Accordion.Trigger className="data-[state=open]:font-bold data-[state=open]:hidden w-full text-start flex justify-between items-center">
                    <p className="max-w-[90%] lg:max-w-full ">{v.title}</p>
                    <AiOutlinePlus className="text-xs lg:text-[1.125rem] text-red-700 " />
                  </Accordion.Trigger>
                  <Accordion.Trigger className="data-[state=open]:font-bold data-[state=closed]:hidden w-full text-start flex justify-between items-center">
                    <p className="max-w-[90%] lg:max-w-full ">{v.title}</p>
                    <AiOutlineMinus className="text-xs lg:text-[1.125rem] text-red-700" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-justify overflow-hidden text-[0.625rem] lg:text-lg mt-5 px-5 text-neutral-600">
                  <div
                    dangerouslySetInnerHTML={{ __html: v?.description || '' }}
                  />
                </Accordion.Content>
              </Accordion.Item>
            ))}
        </Accordion.Root>
      )}
    </>
  )
}
