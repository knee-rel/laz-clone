import React from 'react';

export default function Footer() {
    return (
        <div className='container bg-gray-800 p-8'>
            <div className='sm:flex mb-4'>
                <div className='sm:w-1/4 h-auto'>
                    <div className='mb-2'>Contact Info</div>
                    <ul className='list-reset leading-normal'>
                        <li className='hover:text-orange text-grey-darker'>Phone: </li>
                        <li className='hover:text-orange text-grey-darker'>Address: </li>
                    </ul>
                </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="text-blue mb-2">Get Help</div>
                <ul className="list-reset leading-normal">
                    <li className="hover:text-blue text-grey-darker">Delivery Information</li>
                    <li className="hover:text-blue text-grey-darker">Sales Terms and Conditions</li>
                    <li className="hover:text-blue text-grey-darker">Returns and Refunds</li>
                    <li className="hover:text-blue text-grey-darker">Privacy Notice</li>
                    <li className="hover:text-blue text-grey-darker">Shopping FAQs</li>
                </ul>
  
            </div>
            <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                <div className="text-green-dark mb-2">Popular Categories</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-green-dark text-grey-darker">Coats</li>
                        <li className="hover:text-green-dark text-grey-darker">Jeans</li>
                        <li className="hover:text-green-dark text-grey-darker">Tops</li>
                        <li className="hover:text-green-dark text-grey-darker">Sweaters</li>
                        <li className="hover:text-green-dark text-grey-darker">Jackets</li>
                    </ul>
            </div>

            <div className='sm:w-1/2 sm:mt-0 mt-8 h-auto'>
                <div className='text-red-light mb-2'>Let's Stay In Touch</div>
                <div className='mt-4 flex'>
                    <input type='text' class='p-2 border-grey-light round text-grey-dark text-sm h-auto' placeholder='Insert Your Email Here' />
                    <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                </div>
                <p className='text-grey-darker leading-normal'>Keep up to date with our latest news and special offers.</p>
            </div>
        </div>
    </div>
    )
}