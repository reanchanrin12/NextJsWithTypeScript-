import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="w-full  bg-gray-100 border-t border-gray-200 py-4 text-center ">
      <span className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </span>
    </footer>
  )
}
