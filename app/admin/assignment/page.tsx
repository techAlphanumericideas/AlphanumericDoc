'use client';
import { useEffect,useState } from 'react';
import Assignments from '@/app/Components/Assignments'
import React from 'react'

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

  return (
    <div>
      <h1 className='text-blue-500 font-bold text-[30px] mb-5'> All Assignments </h1>

      {assignments.map((assignment) => (
        <Assignments key={assignment._id} assignment={assignment} />
      ))}
    </div>
  )
}

export default Page
