import Link from "next/link"
export default function UserSidebar() {
    return (
        <div className='w-55 h-150'>
            <div className='w-55 bg-gray-100 h-full text-start pt-5 pl-8'>

                <ul>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-2 text-center h-10 '><Link href='/user'>User</Link></li>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/user/profile'>Profile</Link></li>
                    <li className='text-blue-500 font-bold text-[20px] border-2 w-40 rounded-full flex justify-center mt-5 text-center h-10 '><Link href='/user/assignment'>Assignment</Link></li>

                </ul>
            </div>
        </div>
    )
}






{/* <li></li>
                <li></li> */}