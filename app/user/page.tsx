'use client'
import {auth} from '@/app/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'


export default function UserPage(){


    //  const [data, setData] = useState<any>({});
    
    //     useEffect(() => {
    
    //         fetch("/api/userdashboard")
    //                 .then(res => res.json())
    //                 .then(setData);
    
    //         }, [])
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



    }, [])






    return(
        <div>
            <h1 className='text-3xl font-bold mb-7 ml-4 text-gray-600'>User Dashboard</h1>
            <div className='flex gap-6 '>
                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-sky-800'>
                    <h2 className='text-xl text-white font-semibold'>Assignment</h2>
                    <p className='text-2xl text-white font-bold'>{data.assignments}</p>
                </div>

                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-sky-800'>
                    <h2 className='text-xl text-white font-semibold'>Compelete</h2>
                    <p className='text-2xl text-white font-bold'>{data.compeleted}</p>
                </div>

                <div className='p-6 bg-gray-100 rounded-full text-center w-55 bg-sky-800'>
                    <h2 className='text-xl text-white font-semibold'>Unsubmited</h2>
                    <p className='text-2xl text-white font-bold'>16</p>
                </div>

                <div className='p-6 bg-sky-800 rounded-full text-center w-55'>
                    <h2 className='text-xl text-white font-semibold'>Pending</h2>
                    <p className='text-2xl text-white font-bold'>{data.pending}</p>
                </div>

            </div>
        </div>
    )
}
