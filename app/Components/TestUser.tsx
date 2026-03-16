"use client"
import React, { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'


const Test = () => {
   
    const imgu = auth.currentUser?.photoURL
    const [user,setuser]=useState(" ")
    const [iamge , setImage] = useState(" ")
      useEffect(()=>{
       
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setImage(imgu)
            const unsubdcribe = onAuthStateChanged(auth,(user)=>{
                if(user){
                    console.log()
                    console.log("User lgged in",user.displayName)
                    setuser(auth.currentUser?.displayName)
                } else {
                    console.log("No User");
                }
            })
            return () => unsubdcribe();
        },[])
    
    return (
        
            <div className='w-130 h-100 mt-20 border-2 ml-50'>
            <div className='w-130 h-100  border-2 bg-sky-100 flex-col justify-center items-center'>
                <div className=' w-full h-1/2 flex-col justify-center items-center px-38 py-8'>
                    <img className='ml-16 rounded-full mb-3' src={`${imgu}`} height={100} width={50} alt='profile pic' />
                    <h1 className='text-black font-bold text-[20px] '>{auth.currentUser?.displayName}</h1>
                    <p className='text-black font-bold text-[15px]  mr-5'>{auth.currentUser?.email}</p>
                    <button className='bg-red-500 px-10 py-2 ml-7 mt-5 font-bold rounded-full'>Logout</button>
                </div>
                <div className='w-full h-1/2 flex justify-center items-center gap-10 mt-7'>
                    <div className='text-center text-[20px]'>
                        <button className='bg-green-500 h-15 w-30 text-center  rounded-2xl'>100</button>
                        <p className='text-black text-[18px]'>Complete</p>
                    </div>
                    <div className='text-center text-[20px]'>
                        <button className='bg-yellow-400 text-blue-600 h-15 w-30 text-center  rounded-2xl'>20</button>
                        <p className='text-black text-[18px]'>Assignment</p>
                   </div>
                </div>
                
                    </div>
              
                  
                        
                    </div>
            

       
            
        
    
    )
}

export default Test
