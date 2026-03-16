import React from 'react'

type assignment ={
    title: string;
  discripstion: string;
    userEmail: string;
    dueDate: string;
    status: string;
}

export default function Assignments({ assignment }: { assignment: assignment }) {
  return (
    <div className='bg-gray-900 w-200 h-50 border-2  border-blue-500 rounded-lg flex flex-col justify-center gap-2 px-5'>
          <h1 className='font-bold text-[23px] text-green-500'>{assignment.title}</h1>
      <p>{assignment.discripstion}</p>
          <p><span className='font-semibold text-green-500'>Email:</span> {assignment.userEmail}</p>
          <p><span className='text-red-500 font-semibold'>Due Date:</span> {assignment.dueDate}</p>
          <p><span className='text-indigo-500 font-semibold'>Status:</span> {assignment.status}</p>


      
    </div>
  )
}


