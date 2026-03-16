import React from 'react'

export default function UserPage(){
    return(
        <div>
            <h1 className='text-3xl font-bold mb-7 text-blue-600'>User Dashboard</h1>
            <div className='flex gap-6 '>
                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-sky-500'>
                    <h2 className='text-xl text-white font-semibold'>Assignment</h2>
                    <p className='text-2xl text-white font-bold'>65</p>
                </div>

                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-green-500'>
                    <h2 className='text-xl text-white font-semibold'>Compelete</h2>
                    <p className='text-2xl text-white font-bold'>56</p>
                </div>

                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-red-500'>
                    <h2 className='text-xl text-white font-semibold'>Unsubmited</h2>
                    <p className='text-2xl text-white font-bold'>16</p>
                </div>

                <div className='p-6 bg-yellow-400 rounded-full text-center w-55'>
                    <h2 className='text-xl text-white font-semibold'>Pending</h2>
                    <p className='text-2xl text-white font-bold'>10</p>
                </div>

            </div>
        </div>
    )
}
