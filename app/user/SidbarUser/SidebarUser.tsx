'use client'
import Link from "next/link"
import { auth } from '@/app/lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
export default function UserSidebar() {

    const router = useRouter()

    const handleLogout = async () => {
        try {
            await signOut(auth);
            const res = await fetch('/api/logout', {
                method: 'POST'
            })
            if (res.ok) {
                router.replace('/login');
                console.log(res)
            }

        } catch (err) {
            console.log("error", err);
        }
    }





    return (
        <section className="sticky top-0 left-0 bttton-0">
        <div className='w-55 h-140 sticky top-0 left-0'>
            <div className='w-55 bg-gray-100 h-full text-start pt-5 pl-8'>

                <ul>
                    <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-2 text-center h-10 '><Link href='/user'>User</Link></li>
                    <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/user/profile'>Profile</Link></li>
                    <li className='text-red-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/user/assignment'>Assignment</Link></li>

                </ul>
                    <button onClick={handleLogout} className='bg-red-600 text-white py-2 px-12 rounded-full hover:bg-red-800 mt-70'>Logout</button>
            </div>
               
        </div>
        </section>
    )
}






{/* <li></li>
                <li></li> */}