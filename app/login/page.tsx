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
    <div className='w-full h-145 bg-gray-300 flex justify-center items-center'>
        <div className='w-100 h-135 bg-blue-400'>
            <form>
                <div className='flex-col w-full h-110  bg-blue-400 items-center justify-center p-8 mt-10 rounded-md '>
                          <h1 className='font-bold text-[25px] ml-32 '>LOGIN</h1>
                    <div className='text-white w-full h-15 flex-col mt-7'>
                              <label className='font-bold'>Enter Your Email</label><br/>
                              <input name='' placeholder='Email' className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mt-1" />

                    </div>
                          <div className='text-white mt-8'>
                              <label className='font-bold'>Enter Your Password</label><br/>
                              <input name='' placeholder='Password' className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mt-1" />
                          </div>
                          <Link href={'/register'}><p className='pl-42 mt-2 text-decoration-line: underline'>i dont have an account</p></Link>
                          <button className='bg-white text-black font-bold px-10 py-3 rounded-full ml-28 mt-6 shad  '>Login</button>
                    
                </div>

            </form>
                  <button onClick={GoogleInWithSingin} className='bg-white font-bold text-black text-[12px] px-15 py-2 rounded-full ml-19 shad flex justify-center items-center '> <Image src='/download.webp' width={30} height={40} alt={'google'} />   Sign in by Google</button>


        </div>
    </div>
 </section>
  )
}

export default page
