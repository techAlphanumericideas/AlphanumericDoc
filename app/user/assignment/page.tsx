'use client'

import {auth} from '@/app/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import React from 'react'
import { BsCalendarDate } from "react-icons/bs";



type Assignment={
  _id:string;
  title:string;
  discripstion:string;
  dueDate:string;
  status:"pending" | "done";
};


export default function Page() {
  const [assignment,setAssignment]= useState<Assignment[]>([]);
  // const [loading,setLoading]= useState(true);
  useEffect(()=>{
    const uns = onAuthStateChanged(auth,(user)=>{
      if(!user){
        return
      }
      const email = user.email;
      console.log('email',email)
      fetch(`/api/user/own-ass?email=${email}`)
      .then(res=>res.json())
      .then((data:Assignment[])=>{
        setAssignment(data);
        // setLoading(false);
      });
    });
   return ()=> uns();

 

  },[])
  

 async function markDone(id:string){
   
      const res = await fetch('/api/assignment-done', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ id })
      });
      if (res.ok) {
        setAssignment(prev => prev.map(a => a._id === id ? { ...a, status: 'done' } : a))
      }    
  }

  return (
    <div className='w-full h-auto flex-col p-6  bg-gray-50'>
      <h1 className='text-2xl font-bold mb-6 text-black'>My Assignments</h1>
      <div className='grid  w-full grid-2 grid-cols-3 gap-5'>
      {assignment.length === 0 && (
        <p className='text-black text-[20px] '>No Assignments</p>
      )}
      {assignment.map((a)=>(
        
        <div key={a._id} className='w-80  h-55 mb-4 shadow-inner text-black p-5 flex-col justify-between items-center rounded-lg border-2 '>
          <h2 className='font-bold text text-start text-black '>{a.title}</h2>
          <p className='text-[14px] py-2 w-full h-8 overflow-hidden text-ellipsis' >{a.discripstion}</p>
          <p className='py-2' >Status: <span className={a.status === 'done' ? 'text-green-600 font-semibold' : 'text-red-500'}>{a.status}</span></p>
          {a.status === 'pending' && (

            <button onClick={()=>markDone(a._id)} className='mt-2 w-full mb-5  py-2 bg-blue-600 text-white rounded-full'>Mark as Done</button>
            
          
          )}
          <p className='flex gap-2  h-5 w-60 overflow-hidden text-ellipsis'><BsCalendarDate />{a.dueDate}</p>
      
        </div>
      ))}

      
    </div>
    </div>
  )
}


