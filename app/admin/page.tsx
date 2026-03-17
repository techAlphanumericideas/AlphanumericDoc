'use client'
import { useEffect, useState } from "react";
import CardComponents from '@/app/Components/cardComponents'
import Link from "next/link";


type AssignmentsDetails = {
    _id:string;
    title:string;
    userEmail:string;
    dueDate:string;
    status:string;
}




export default function Page(){

    const [assignment,setAssignment]= useState<AssignmentsDetails[]>([]);



    const [data, setData] = useState<any>({});

    useEffect(() => {


        fetch('/api/admin/worklist')
        .then(res=>res.json())
        .then(setAssignment)







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
            <h1 className='text-3xl font-bold mb-8 text-gray-800'>Admin Dashboard</h1>
            { 
            <div className=' flex gap-6 '>
                    <div className='p-6 text-center w-60 gap-5 rounded-full bg-sky-700'>
                    <h2 className='text-xl text-white font-semibold'>Total User</h2>
                    <p className='text-2xl text-white font-bold'>{data.totalUser}</p>
                </div>

                <div className='p-6 text-center w-60 gap-5 rounded-full bg-sky-700'>
                        <h2 className='text-xl text-white font-semibold'>Assignment</h2>
                        <p className='text-2xl text-white font-bold'>{data.totalAssignments}</p>
                </div>
                    <div className='p-6 text-center w-60 gap-5 rounded-full bg-sky-700'>
                        <h2 className='text-xl text-white font-semibold'>Compeleted</h2>
                        <p className='text-2xl text-white font-bold'>{data.compeleted}</p>
                </div>

                    <div className='p-6 text-center w-60 gap-5 rounded-full bg-sky-700'>
                    <h2 className='text-xl text-white font-semibold'>Pending</h2>
                        <p className='text-2xl text-white font-bold'>{data.pending}</p>
                </div>

            </div>}
            <div className='m-5'>
                <Link href='admin/create-ass'> <button className='bg-green-600 px-3 py-3 rounded-lg font-semibold'>Create Assignment</button></Link>
            </div>

            <div className='bg-gray-100 w-full h-70 mt-10 flex-col justify-center border-2 items-center '>
                <div className='flex justify-between'><p className='px-5 text-gray-700 ml-4 font-semibold'>Email</p>
                    <p className='px-5 text-gray-700 font-semibold ml-34'>Title</p>
                    <p className='px-5 text-gray-700 font-semibold ml-6'>Deadline</p>
                    <p className='px-5 text-gray-700 font-semibold mr-1'>Status</p>
                    
                    </div>

                <div className='w-full h-70 border pl-3'>
                    {
                        assignment.map((a)=>(
                            <CardComponents key={a._id} assignment={a}/>
                        ))
                    }

                </div>
                

            </div>






        </div>
    )
}



