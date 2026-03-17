"use client"
import React, { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/app/lib/firebase'


const Test = () => {

  const imgu = auth.currentUser?.photoURL
  console.log(imgu)
  const [user, setuser] = useState(" ")
  const [iamge, setImage] = useState(" ")
   const [data, setData] = useState<any>({});
  useEffect(() => {


    const uns = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return
      }
      const email = user.email;
      console.log('email', email)
      fetch(`/api/userdashboard?email=${email}`)
        .then(res => res.json())
        .then(setData);
    });
    return () => uns();


    fetch("/api/userdashboard")
      .then(res => res.json())
      .then(setData);

    // eslint-disable-next-line react-hooks/set-state-in-effect
  
    const unsubdcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log()
        console.log("User lgged in", user.displayName)
        
         setuser(auth.currentUser?.displayName)
      } else {
        console.log("No User");
      }
    })
    return () => unsubdcribe();
  }, [])

  return (
    <div>
      <h1 className='text-black text-2xl font-bold '>Hello <span className='text-[20px]'>{auth.currentUser?.displayName} </span></h1>

    <div className='w-130 h-100 mt-10 border-2 ml-40'>
      <div className='w-130 h-100  border-2  flex-col justify-center items-center'>
        <div className=' w-full h-1/2 flex-col justify-center items-center px-38 py-8'>
          <img className='ml-16 rounded-full mb-3' src={`${imgu}`} height={100} width={50} alt='profile pic' />
          <h1 className='text-black font-bold text-[20px] '>{auth.currentUser?.displayName}</h1>
          <p className='text-black font-bold text-[15px]  mr-5'>{auth.currentUser?.email}</p>
          <button className='bg-red-700 px-10 py-2 ml-7 mt-5 font-bold rounded-full'>Logout</button>
        </div>
        <div className='w-full h-1/2 flex justify-center items-center gap-10 mt-7'>
          <div className='text-center text-[20px]'>
              <button className='bg-green-700 h-15 w-30 text-center  rounded-2xl'>{data.compeleted}</button>
            <p className='text-black text-[18px]'>Complete</p>
          </div>
          <div className='text-center text-[20px]'>
              <button className='bg-yellow-600 text-blue-600 h-15 w-30 text-center  rounded-2xl'>{data.assignments}</button>
            <p className='text-black text-[18px]'>Assignment</p>
          </div>
        </div>

      </div>



    </div>
    </div>





  )
}

export default Test
