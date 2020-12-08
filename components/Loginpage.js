import React from 'react';

export default function Loginpage() {
    return (
        <div className = 'bg-grey-800 h-screen w-screen'>
            <div className = 'flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0'>
                <div className = 'flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0' >
                    <div className = 'flex flex-col w-full md:w-1/2 p-4'>
                        <div className="flex flex-col flex-1 justify-center mb-8">
                        <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}