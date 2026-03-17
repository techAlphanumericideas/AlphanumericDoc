'use client';
import { useEffect,useState } from 'react';
import Assignments from '@/app/Components/Assignments'
import React from 'react'
import Link from 'next/link';


type assignment ={
  _id:string;
    title: string;
  description:string;
    userEmail: string;
    dueDate: string;
    status: string;
}

const Page = () => {
  const [assignments, setAssignments] = useState<assignment[]>([]);
  useEffect(() => {

    fetch("/api/admin/all-ass")
    .then(res => res.json())
    .then((data: assignment[]) => setAssignments(data));
  }
    , []);



  async function edit(id: string) {

    const res = await fetch('/api/assignment-done', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      setAssignments(prev => prev.map(a => a._id === id ? { ...a, status: 'done' } : a))
    }
  }





  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
      <h1 className='text-black font-bold text-[30px] mb-5'> All Assignments </h1>
      <div className='m-5'>
        <Link href='create-ass'> <button className='bg-green-600 px-3 py-3 rounded-lg font-semibold'>Create Assignment</button></Link>
      </div> </div>
      <div className=' grid grid-cols-3 p-5 gap-4'>

      {assignments.map((assignment) => (
        <Assignments key={assignment._id} assignment={assignment} />
      ))}
      </div>
    </div>
  )
}

export default Page
