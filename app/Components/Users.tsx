import React from 'react'
type User = {
  _id: string;
  name:string;
  email:string;
}

export default function Users({user}:{user:User}) {
 
  return (
    <div className='w-180 h-10 flex gap-8 m-5 pl-2 items-center text-green-500 border-2'>
      <p className='font-semibold  text-blue-500'>{user.name}</p>
      <p className=' text-gray-500'>{user.email}</p>
      <p className='text-red-500'>2026-03-13T08</p>
      <button className='bg-red-600 px-4 py-0.3 rounded-lg text-white'>Delete</button>
    </div>
  )
}


