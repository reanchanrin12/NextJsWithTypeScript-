'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition">
            <Link href="/" className={pathname === '/' ? 'text-blue-600' : 'text-gray-700'}>Home</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/about" className={pathname === '/about' ? 'text-blue-600' : 'text-gray-700'}>About</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/contact" className={pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'}>Contact</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/login" className={pathname === '/login' ? 'text-blue-600' : 'text-gray-700'}>Login</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/register" className={pathname === '/register' ? 'text-blue-600' : 'text-gray-700'}>Register</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 px-4 text-gray-700 font-medium">
          <li className="block hover:text-blue-600 transition">
            <Link href="/" className={pathname === '/' ? 'text-blue-600' : 'text-gray-700'}>Home</Link>
          </li>
          <li className="block hover:text-blue-600 transition">
            <Link href="/about" className={pathname === '/about' ? 'text-blue-600' : 'text-gray-700'}>About</Link>
          </li>
          <li className="block hover:text-blue-600 transition">
            <Link href="/services" className={pathname === '/services' ? 'text-blue-600' : 'text-gray-700'}>Services</Link>
          </li>
          <li className="block hover:text-blue-600 transition">
            <Link href="/contact" className={pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'}>Contact</Link>
          </li>
          <li className="block hover:text-blue-600 transition">
            <Link href="/login" className={pathname === '/login' ? 'text-blue-600' : 'text-gray-700'}>Login</Link>
          </li>
          <li className="block hover:text-blue-600 transition">
            <Link href="/register" className={pathname === '/register' ? 'text-blue-600' : 'text-gray-700'}>Register</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
