'use client'
import { useEffect, useState } from "react";
import CardComponents from '@/app/Components/cardComponents'
import Link from "next/link";




export default function Page(){
    const [data, setData] = useState<any>({});

    useEffect(() => {

            fetch("/api/admin/dashboard")
                .then(res => res.json())
                .then(setData);

        }, [])


    // if(!Response){
    //     alert("Faild to fetch data");
    // }
    // const Data = Response.json();

    // const Fetchdata = async () => {
    //     const response = await fetch('/api/admin/dashboard')
    //     if(!response){
    //         alert("Faild to fetch data");
    //     }
    //     const Data = response.json();
    //     console.log();
        
    // }
    

   
    return(
        <div className="w-full h-100 bg-gray-200 p-6">
            <h1 className='text-3xl font-bold mb-8 text-blue-600'>Admin Dashboard</h1>
            { 
            <div className=' flex gap-6 '>
                <div className='p-6 text-center w-60 gap-5 rounded-full bg-indigo-700'>
                    <h2 className='text-xl text-white font-semibold'>Total User</h2>
                    <p className='text-2xl text-white font-bold'>{data.totalUser}</p>
                </div>

                <div className='p-6 text-center w-60 gap-5 rounded-full bg-sky-700'>
                        <h2 className='text-xl text-white font-semibold'>Assignment</h2>
                        <p className='text-2xl text-white font-bold'>{data.totalAssignments}</p>
                </div>
                <div className='p-6 text-center w-60 gap-5 rounded-full bg-orange-500'>
                        <h2 className='text-xl text-white font-semibold'>Compeleted</h2>
                        <p className='text-2xl text-white font-bold'>{data.compeleted}</p>
                </div>

                <div className='p-6 text-center w-60 gap-5 rounded-full bg-red-700'>
                    <h2 className='text-xl text-white font-semibold'>Pending</h2>
                        <p className='text-2xl text-white font-bold'>{data.pending}</p>
                </div>

            </div>}
            <div className='m-5'>
                <Link href='admin/create-ass'> <button className='bg-green-600 px-3 py-3 rounded-lg font-semibold'>Create Assignment</button></Link>
            </div>

            <div className='bg-gray-100 w-200 h-70 mx-30 flex-col justify-center border-2 items-center '>
                <div className='flex justify-between'><p className='px-5 text-blue-500 font-semibold'>WorkList</p>
                    <p className='px-5 text-blue-500 font-semibold ml-14'>Assing Date</p>
                    <p className='px-5 text-blue-500 font-semibold mr-2'>Deadline</p>
                    <p className='px-5 text-blue-500 font-semibold mr-4'>Status</p>
                    
                    </div>

                <div className='w-195 h-70 border pl-3'>
                    <CardComponents/>
                    <CardComponents />
                    <CardComponents />

                </div>
                

            </div>






        </div>
    )
}



