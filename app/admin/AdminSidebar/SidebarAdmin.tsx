'use client'
import Link from "next/link"
import { auth } from '@/app/lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
export default function AdminSidebar() {

const router = useRouter();



    const handleLogout = async () => {
        try {
            await signOut(auth);
            const res = await fetch('/api/logout', {
                method: 'POST'
            })
            if(res.ok){
                router.replace('/login');
                console.log(res)
            }

        } catch (err) {
            console.log("error", err);
        }
    }







    return (
        <section className=" sticky top-20 left-0 w-55 h-screen bg-gray-100 px-5">
        <div className='w-55 '>
            <div className='w-50 bg-gray-100 h-auto text-start pt-5 pl-8b '>

                <ul>
                        <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin'>Admin</Link></li>
                    <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin/user'>Users</Link></li>
                    <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin/assignment'>Assignment</Link></li>

                </ul>
            </div>
            <button onClick={handleLogout} className='bg-red-600 border-2 font-bold text-white py-2 px-12 rounded-full hover:bg-red-800 mt-70'>Logout</button>
        </div>
        </section>
    )
}