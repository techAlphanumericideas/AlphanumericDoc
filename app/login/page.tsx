/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'

import {auth,provider} from '@/app/lib/firebase'
import {  signInWithPopup } from "firebase/auth";



const page = () => {
    const router = useRouter();
const GoogleInWithSingin=async()=>{
    try{
       
      const result =  await signInWithPopup(auth, provider)
        alert("Login Successful")

        const user = result.user;

        await fetch('/api/user',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:user.displayName,
                email:user.email,
                role:"user",
            })
        })

        const res = await fetch('/api/user/role',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                email:user.email
            })
        })

        const data = await res.json();

        if(data.role ==='admin'){
            router.push('/admin')
        } else {
            router.push('/user')
        }
        // alert("Google login successful");
        // router.push('/user')
    }catch(error){
        console.log(error)
        alert("Login failed")
    } 
       
}

  return (
 <section >
    <div className='w-full h-145 bg-gray-200 flex justify-center items-center rounded-lg'>
        <div className='w-100 rounded-lg h-135 bg-white'>
            <form>
                <div className='flex-col w-full h-110  bg-white items-center justify-center p-8 mt-10 rounded-md '>
                          <h1 className='font-bold text-[25px] ml-32 text-gray-800 '>LOGIN</h1>
                    <div className='text-black w-full h-15 flex-col mt-7'>
                              <label className='font-bold'>Enter Your Email</label><br/>
                              <input name='' placeholder='Email' className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"  />

                    </div>
                          <div className='text-black mt-8'>
                              <label className='font-bold'>Enter Your Password</label><br/>
                              <input name='' placeholder='Password' className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500" />
                          </div>
                          <Link href={'/register'}><p className='pl-42 mt-2 text-decoration-line: underline text-black'>i dont have an account</p></Link>
                          <button className='bg-gray-800 text-white font-bold px-10 py-3 rounded-full hover:bg-black hover:cursor-pointer  ml-28 mt-6 shad  '>Login</button>
                    
                </div>

            </form>
                  <button onClick={GoogleInWithSingin} className='bg-gray-200 font-bold text-black text-[12px] px-15 py-2 rounded-full ml-19 shad flex justify-center items-center hover:bg-white hover:cursor-pointer '> <Image className='rounded-full mr-2' src='/download.webp' width={30} height={40} alt={'google'} />   Sign in by Google</button>


        </div>
    </div>
 </section>
  )
}

export default page
