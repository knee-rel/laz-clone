import Router from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { useRouter } from 'next/router';

export default function Main() {
    const router = useRouter()

    return(
        <main className = 'my-8'>
            <div className='container mx-auto'>
                {/* insert image at the class below */}
                <div className='h-64 rounded-md overflow-hidden bg-cover bg-center'>
                    <div className='bg-gray-900 bg-opacity-50 flex items-center h-full w-full'>
                        <div className = 'px-10 max-w-xl'>
                            <h2 className ='text-2xl text-white font-semibold'>New Arrivals</h2>
                            <p className ='mt-2 text-gray-400'>Buy me now while I am on sale!</p>
                            <button className = 'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={() => {
                                router.push({
                                    pathname:'/new-arrivals'
                                })
                            }}>
                                <a href='/'>Shop Now!</a>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>  
                    </div>
                </div>

                <div className='md:flex mt-8 md:-mx-4'>
                {/* insert image at the div below */}
                {/* <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"> */}
                    <div className = 'w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2'>
                        <div className='bg-gray-900 bg-opacity-50 flex items-center h-full'>
                            <div className='px-10 max-w-xl'>
                            <h2 className="text-2xl text-white font-semibold">Dresses</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button className = 'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={()=> {
                                    router.push({
                                        pathname:'/dresses'
                                    })
                                }}>
                                    <span>Shop Now!</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className = 'w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2'>
                        <div className='bg-gray-900 bg-opacity-50 flex items-center h-full'>
                            <div className='px-10 max-w-xl'>
                            <h2 className="text-2xl text-white font-semibold">Tops</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button className = 'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={()=> {
                                    router.push({
                                        pathname:'/tops'
                                    })
                                }}>
                                    <span>Shop Now!</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='md:flex mt-8 md:-mx-4'>
                {/* insert image at the div below */}
                {/* <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"> */}
                    <div className = 'w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2'>
                        <div className='bg-gray-900 bg-opacity-50 flex items-center h-full'>
                            <div className='px-10 max-w-xl'>
                            <h2 className="text-2xl text-white font-semibold">Eyewear</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button className = 'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={()=> {
                                    router.push({
                                        pathname:'/eyewear'
                                    })
                                }}>
                                    <span>Shop Now!</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className = 'w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2'>
                        <div className='bg-gray-900 bg-opacity-50 flex items-center h-full'>
                            <div className='px-10 max-w-xl'>
                            <h2 className="text-2xl text-white font-semibold">Watches</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button className = 'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={()=> {
                                    router.push({
                                        pathname:'/watches'
                                    })
                                }}>
                                    <span>Shop Now!</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}