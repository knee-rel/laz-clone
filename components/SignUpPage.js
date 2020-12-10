import React from 'react';

export default function SignUpPage() {
    return (
        <div className = 'container bg-gray-400 h-screen w-screen'>
            <div className = 'flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0'>
                <div className = 'flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0' >
                    <div className = 'flex flex-col w-full md:w-1/2 p-4'>
                        <div className="flex flex-col flex-1 justify-center mb-8">
                        <h1 className="text-4xl text-center font-thin">Create Your Account</h1>
                        <div className="w-full mt-4">
                            <form className='form-horizontal w-3/4 mx-auto' method='POST' action='#'>
                                <div className="flex flex-col mt-4">
                                    <input id="firstname" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="firstname" value="" placeholder="First Name" />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <input id="lastname" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="lastname" value="" placeholder="Last Name" />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <input id="email" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" value="" placeholder="Email" />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <input id="password" type="password" class="flex-grow h-8 px-2 border rounded border-grey-400" name="password" value="" placeholder="Password" />
                                </div>

                                <div className="flex items-center mt-4">
                                    <input type="checkbox" name="remember" id="remember" class="mr-2"/> 
                                    <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                                </div>

                                <div className="flex flex-col mt-8">
                                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Login
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-4">
                                <a class="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                Forgot Your Password?
                                </a>
                            </div>

                        </div>
                        </div>
                        {/* insert image here */}
                        {/* <div class="hidden md:block md:w-1/2 rounded-r-lg" style="background: url(''); background-size: cover; background-position: center center;"></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}