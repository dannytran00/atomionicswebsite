'use client'

import React, { useState } from 'react'
import SidebarAdmin from './sidebarAdmin'
import HeaderAdmin from './headerAdmin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'
import NotFound from '~/app/not-found'
import { usePathname } from 'next/navigation'

const blacklist = [
  '/dashboard/program',
  '/dashboard/media',
  '/dashboard/comment',
  '/dashboard/team',
  '/dashboard/social',
]

export default function AdminLayout({
  children,
  sidebar = true,
  header = true, // session,
}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const session: any = useSession()
  const role = session?.data?.user?.role

  return blacklist.includes(pathname) && role === 'USER' ? (
    <NotFound />
  ) : (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex h-screen overflow-hidden">
        {sidebar && (
          <SidebarAdmin
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {header && (
            <HeaderAdmin
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          )}
          <main className="w-full mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
