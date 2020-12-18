import React from 'react'
import Link from 'next/link'
import Notify from './Notify'

const Main = () => {
  const category = [
    { link: 'new-arrivals', menuName: 'New Arrivals', results: '100' },
    { link: 'dresses', menuName: 'Dresses', results: '10' },
    { link: 'tops', menuName: 'Tops', results: '40' },
    { link: 'eyewear', menuName: 'Eyewear', results: '21' },
    { link: 'watches', menuName: 'Watches', results: '12' },
  ]
  return (
    <main className="my-8">
      <div className="container mx-auto">
        {category.map((value, key) => {
          return (
            <div className="md:flex mt-8 md:-mx-4">
              <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                  <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">{value.menuName}</h2>
                    <p className="mt-2 text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam
                      sint voluptatum pariatur.
                    </p>
                    <Link
                      href={{
                        pathname: `/categories/${value.link}`,
                        query: { cat: value.menuName, res: value.results },
                      }}
                    >
                      <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Shop Now!</span>
                        <svg
                          className="h-5 w-5 mx-2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Notify />
    </main>
  )
}

export default Main
