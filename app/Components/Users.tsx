import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
type User = {
  _id: string;
  name:string;
  email:string;
}

export default function Users({user}:{user:User}) {
 
  return (
    <div className='w-full h-10 flex gap-8 m-4 pl-2 justify-between items-center text-green-500 border'>
      <p className='font-semibold  text-gray-600'>{user.name}</p>
      <p className=' text-gray-500'>{user.email}</p>
      <p className='text-red-500'>2026-03-13T08</p>
      <button className='text-red-600 text-[20px] hover:bg-gray-600  mr-3'><MdOutlineDelete /></button>
    </div>
  )
}


