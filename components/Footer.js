import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const category = [
    { link: 'new-arrivals', menuName: 'New Arrivals', results: '100' },
    { link: 'dresses', menuName: 'Dresses', results: '10' },
    { link: 'tops', menuName: 'Tops', results: '40' },
    { link: 'eyewear', menuName: 'Eyewear', results: '21' },
    { link: 'watches', menuName: 'Watches', results: '12' },
  ]
  return (
    <div className="bg-gray-900 p-8">
      <div className="flex flex-wrap max-w-6xl m-auto text-gray-800">
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-xs uppercase text-gray-200 font-medium"> Category </div>

          {category.map((value, key) => {
            return (
              <div>
                <Link
                  href={{
                    pathname: `/categories/${value.link}`,
                    query: { cat: value.menuName, res: value.results },
                  }}
                >
                  <a className="my-3 block text-white"> {value.menuName} </a>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-xs uppercase text-gray-200 font-medium">Get Help</div>
          <a className="my-3 block text-white" href="/">
            Delivery Information
          </a>
          <a className="my-3 block text-white" href="/">
            Sales Terms and Conditions
          </a>
          <a className="my-3 block text-white" href="/">
            Returns and Refunds
          </a>
          <a className="my-3 block text-white" href="/">
            Privacy Notice
          </a>
          <a className="my-3 block text-white" href="/">
            Shopping FAQs
          </a>
        </div>

        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <div className="text-xs uppercase text-gray-200 font-medium">Let's Stay In Touch</div>
          <div className="mt-4 flex">
            <input
              type="text"
              class="p-2 border-grey-light round text-grey-dark text-sm h-auto"
              placeholder="Insert Your Email Here"
            />
            <button className="bg-orange-800 text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
          </div>
          <p className="text-gray-200 leading-normal">Keep up to date with our latest news and special offers.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
