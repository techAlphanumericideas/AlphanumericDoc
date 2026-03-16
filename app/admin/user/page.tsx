'use client'
import Users from '@/app/Components/Users'
import React from 'react'
import { useEffect,useState } from 'react'
import { data } from 'react-router-dom'


type User ={
  _id:string;
  name:string;
  email:string
}

const Page = () => {
  const [user , setUser]=useState<User[]>([])

useEffect(()=>{

  fetch("/api/users")
  .then(res=>res.json())
  .then(data=>setUser(data));

},[])

  return (
    <div className='w-full h-140  flex-col justify-center items-center'>
      <h1 className='text-green-500 font-bold text-[27px]'>All User</h1>
      {
        user.map((u)=><Users key={u._id} user={u} />)
      }

     
    </div>
  )
}

export default Page
