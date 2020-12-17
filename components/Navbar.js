import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const category = [
    {
      link: 'new-arrivals',
      menuName: 'New Arrivals',
      results: '100',
      prodName: 'Mango',
      prodPrice: 'P125',
    },
    {
      link: 'tops',
      menuName: 'Tops',
      results: '40',
      prodName: 'Orange',
      prodPrice: 'P250',
    },
    {
      link: 'dresses',
      menuName: 'Dresses',
      results: '10',
      prodName: 'Apple',
      prodPrice: 'P99',
    },
    {
      link: 'eyewear',
      menuName: 'Eyewear',
      results: '21',
      prodName: 'Guyabano',
      prodPrice: 'P349',
    },
    {
      link: 'watches',
      menuName: 'Watches',
      results: '12',
      prodName: 'Grape',
      prodPrice: 'P200',
    },
  ]

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-800 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
              Saoirse
            </a>
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <>
              <FontAwesomeIcon icon={faBars} />
            </>
          </button>
        </div>
        <div
          className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {category.map((value, key) => {
              return (
                <li className="nav-item" key={key}>
                  <Link
                    href={{
                      pathname: `/categories/${value.link}`,
                      query: { cat: value.menuName, res: value.results },
                    }}
                  >
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <span className="ml-2">{value.menuName}</span>
                    </a>
                  </Link>
                </li>
              )
            })}
            <li className="nav-item">
              <Link href={{ pathname: `/login` }}>
                <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={{ pathname: `/signup` }}>
                <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black">
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={{ pathname: `/product` }}>
                <button
                  className="p-2 rounded-full bg-gray-800 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  type="button"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
