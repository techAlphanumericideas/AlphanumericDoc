import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';

type assignment ={
    title: string;
  discripstion: string;
    userEmail: string;
    dueDate: string;
    status: string;
}

export default function Assignments({ assignment }: { assignment: assignment }) {
  return (
    <div className='text-gray-700 w-85 h-75 inset-ring-blue-500  bg-[#ffffff] inset-shadow-sm inset-shadow-red-500 transition-shadow border-r-[0.75em] ring-1 hover:cursor-pointer hover:bg-[#d3ddf1] hover:border-2  rounded-lg flex flex-col p-2 gap-2 px-5'>
          <h1 className='font-bold text-[20px] mt-4'>{assignment.title}</h1>
      <p className='mt-3  w-full h-13 overflow-hidden text-ellipsis'>{assignment.discripstion}</p>
      <p className='text-gray-500 mt-2'><span className='text-gray-500'>Email:</span> {assignment.userEmail}</p>
          <p><span className='f'>Due Date:</span> {assignment.dueDate}</p>
          <p><span className='text-gray-700 font-semibold'>Status:</span> {assignment.status}</p>
          <div className=' w-fll h-12 flex ml-4 mr-2 justify-between'>
        <Link href='/admin/edit-assignment'>  <button className='px-7 mt-2 gap-1 py-2 text-blue-600 rounded-lg border-2  hover:bg-blue-600 hover:text-white  hover:cursor-pointer flex'><FaRegEdit />Edit</button> </Link>
        <button className='px-5 py-2 text-red-600 rounded-lg border-2 hover:bg-red-600 hover:text-white hover:cursor-pointer flex gap-2 mt-2 '><RiDeleteBinLine />Delete</button>

          </div>
          


      
    </div>
  )
}


