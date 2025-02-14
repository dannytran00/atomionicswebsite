import React, { useMemo } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi'

export default function HeaderAdmin(props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) {
  const { data: session }: any = useSession()
  const role = useMemo(() => {
    if (session?.user?.role == 'ADMIN') {
      return 'Administrator'
    } else if (session?.user?.role == 'USER') {
      return 'User'
    } else {
      return 'Unknown'
    }
  }, [session])
  return (
    <header className="sticky top-0 z-50 flex w-full bg-primary md:bg-white drop-shadow-1 drop-shadow ">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className="block lg:hidden"
          >
            <BiMenuAltLeft className="text-2xl text-white md:text-primary" />
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <div className="relative ">
              <img src={'/logo.png'} alt="" className="h-10" />
            </div>
          </Link>
        </div>
        <div className="flex justify-end w-full items-center gap-3 2xsm:gap-7">
          <div className="flex items-center gap-4">
            <div className="flex flex-col dark:text-white text-white md:text-black">
              <div>{session?.user?.name || session?.user?.email}</div>
              <div className="text-xs text-gray-500">{role}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
