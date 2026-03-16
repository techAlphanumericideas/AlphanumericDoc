import Link from "next/link"
export default function AdminSidebar() {
    return (
        <div className='w-55 h-150'>
            <div className='w-55 bg-gray-100 h-full text-start pt-5 pl-8'>

                <ul>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin'>Admin</Link></li>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin/user'>Users</Link></li>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/admin/assignment'>Assignment</Link></li>

                </ul>
            </div>
        </div>
    )
}