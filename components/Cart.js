import React from 'react'
import Link from 'next/link'

const Cart = () => {
  const [cartOpen, setCartOpen] = React.useState(false)
  return (
    <div className="p-5">
      <div className="relative">
        <div className="absolute w-full  rounded-b border-t-0 z-10">
          <div className="shadow-xl w-64">
            <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              {/* put image at the div below */}
              <div className="p-2 w-12"></div>
              <div className="flex-auto text-sm w-32">
                <div className="font-bold">Product 1</div>
                <div className="truncate">Product 1 description</div>
                <div className="text-gray-400">Qt: 2</div>
              </div>
              <div className="flex flex-col w-18 font-medium items-end">
                <div class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-trash-2 "
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </div>
                P299
              </div>
            </div>
            <div class="p-4 justify-center flex">
              <Link href = '/checkout'>
                <button
                  class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                >
                  Checkout 
                  <span> P299</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="h-32"></div>
      </div>
    </div>
  )
}

export default Cart
