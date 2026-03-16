'use client'

import {auth} from '@/app/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import React from 'react'


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
    <div className='w-full h-auto flex-col p-6'>
      <h1 className='text-2xl font-bold mb-6 text-black'>My Assignments</h1>
      <div className='grid  w-full grid-2 grid-cols-3 gap-5'>
      {assignment.length === 0 && (
        <p>No Assignments</p>
      )}
      {assignment.map((a)=>(
        <div key={a._id} className='border w-80  h-75 p-4 mb-4 shadow-inner rounded-lg bg-gray-100'>
          <h2 className='font-bold text-lg text-start text-black '>{a.title}</h2>
          <p className='px-3 py-1 text-gray-700 w-full h-20 mt-2 border-1'>{a.discripstion}</p>
          <p className='p-3 text-black'>Due:{a.dueDate}</p>
          <p className='p-3 text-black'>Status: <span className={a.status === 'done' ? 'text-green-600 ' : 'text-red-500'}>{a.status}</span></p>
          {a.status === 'pending' && (

            <button onClick={()=>markDone(a._id)} className='mt-2 w-full  py-2 bg-blue-600 text-white rounded'>Mark as Done</button>
          
          )}
      
        </div>
      ))}

      
    </div>
    </div>
  )
}


