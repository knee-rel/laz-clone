import React from 'react'

const Category = (props) => {
  const products = [
    { prodName: 'Mango', prodPrice: 'P125' },
    { prodName: 'Guyabano', prodPrice: 'P499' },
    { prodName: 'Grape', prodPrice: 'P299' },
    { prodName: 'Strawberry', prodPrice: 'P399' },
  ]

  return (
    <main class="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">{props.name} </h3>
        <span className="mt-3 text-sm text-gray-500">{props.results}+ results</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {props.items.map((value, key) => {
            return (
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={key}>
                <div className="container flex flex-wrap items-end justify-end h-56 w-full bg-cover">
                  <div className="flex items-center mt-6">
                    <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                      View Item
                    </button>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-6 w-6"
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
                  </div>
                </div>

                <div class="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">{value.title}</h3>
                  <span className="text-gray-500 mt-2">{value.id}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Category
