"use client"
import React from 'react'
import Link from 'next/link'


const page = () => {

  return (
      <section >
          <div className='w-full h-145 bg-white flex justify-center items-center'>
              <div className='w-100 h-120 bg-white'>
                  <form>
                      <div className='flex-col w-full h-120 b bg-blue-400 items-center justify-center p-8 mt-5 rounded-md '>
                          <h1 className='font-bold text-[25px] ml-25'>REGISTER</h1>
                          <div className='text-white w-full h-15 flex-col mt-7'>
                              <label className='font-bold'>Enter Your NAME</label><br />
                              <input name='' placeholder='Email' className='px-1.5 mt-2 border-2 w-full h-10 rounded-md' />

                          </div>
                          <div className='text-white w-full h-15 flex-col mt-7'>
                              <label className='font-bold'>Enter Your Email</label><br />
                              <input name='' placeholder='Email' className='px-1.5 mt-2 border-2 w-full h-10 rounded-md' />

                          </div>
                          <div className='text-white mt-5'>
                              <label className='font-bold'>Enter Your Password</label><br />
                              <input name='' placeholder='Password' className='px-1.5 mt-2 border-2 w-full h-10 rounded-md' />
                          </div>
                          <Link href={'/login'}><p className='pl-42 mt-2 text-decoration-line: underline'>i dont have an account</p></Link>
                          <button className='bg-white text-black font-bold px-10 py-3 rounded-full ml-27 hover:bg-gray-300 mt-6 shad  '>Register</button>
                      </div>

                  </form>


              </div>
          </div>
      </section>
  )
}

export default page
