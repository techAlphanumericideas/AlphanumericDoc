'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../lib/firebase'

const Navbar = () => {

    useEffect(()=>{
        const unsubdcribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("User lgged in",user.displayName)
            } else {
                console.log("No User");
            }
        })
        return () => unsubdcribe();
    },[])





  return (
    <section>
        <nav className='w-full h-20 bg-gray-50 rounded-md border-2 px-10'>

            <div className='w-full h-full flex justify-between items-center'>
                <div> 
                    {/* <Image src='' width={200} height={40} alt={''}/> */}
                      <h1 className='text-blue-500 text-[25px] font-bold'>Alpha<span className='text-red-600'>Docs</span></h1>
                     </div>

                <div className='pe-15'>
                    <ul className='w-100 h-full  flex justify-between'>
                          <Link href='/'>  <li className='text-black text-[20px] font-bold'>Home</li></Link> 
                        <li className='text-black text-[20px] font-bold'>About</li>
                        <li className='text-black text-[20px] font-bold'>Contact Us</li>
                    </ul>
                </div>
                <div>
                      <Link href={'/login'}><button className='text-white font-bold bg-blue-500 w-35 h-12 rounded-full '>Login</button> </Link>
                </div>
            </div>
            
        </nav>
    </section>
  )
}

export default Navbar
